import { TestBed, async, inject } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { of } from "rxjs";

let authServiceStub: Partial<AuthService>;
let router: Router;
const routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);

describe("AuthGuard", () => {
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
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceStub }
      ]
    });
  });

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
