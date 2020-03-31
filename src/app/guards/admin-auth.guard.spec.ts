import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAuthGuard } from './admin-auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

let authServiceStub: Partial<AuthService>;
let router: Router;
const routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);

describe('AdminAuthGuard', () => {
  beforeEach(() => {
    authServiceStub = {
      appUser$: of({
        name: "testUser",
        email: "test@gmail.com",
        isAdmin: false,
        photoURL: ""
      })
    };
    TestBed.configureTestingModule({
      providers: [AdminAuthGuard,
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceStub }]
    });
  });

  it('should ...', inject([AdminAuthGuard], (guard: AdminAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
