import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/shared/location.service';
import { environment } from 'src/environments/environment';

/**
 * Information about the deployment of this application.
 */
@Injectable()
export class DeploymentService {
  /**
   * The deployment mode set from the environment provided at build time;
   * or overridden by the `mode` query parameter: e.g. `...?mode=archive`
   */
  mode: string = this.location.search()['mode'] || environment.mode;

  constructor(private location: LocationService) {}
}
