import { ReflectiveInjector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocationService } from 'src/app/shared/location.service';
import { MockLocationService } from 'src/testing/location.service';
import { DeploymentService } from './deployment.service';

describe('Deployment service', () => {
  describe('mode', () => {
    it('should get the mode from the environment', () => {
      environment.mode = 'foo';
      const deployment = getInjector().get(DeploymentService);
      expect(deployment.mode).toEqual('foo');
    });

    it('should get the mode from the `mode` query parameter if available', () => {
      const injector = getInjector();

      const locationService: MockLocationService = injector.get(LocationService);
      locationService.search.and.returnValue({ mode: 'bar' });

      const deployment = injector.get(DeploymentService);
      expect(deployment.mode).toEqual('bar');
    });
  });
});

function getInjector() {
  return ReflectiveInjector.resolveAndCreate([
    DeploymentService,
    { provide: LocationService, useFactory: () => new MockLocationService('') }
  ]);
}
