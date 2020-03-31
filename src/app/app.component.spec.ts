import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NavBarComponentStub } from './components/nav-bar/nav-bar.component';
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { of } from "rxjs";
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponentStub } from './components/home/home.component';
import { BlogCardComponentStub } from './components/blog-card/blog-card.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgMaterialModule } from './ng-material/ng-material.module';

let authServiceStub: Partial<AuthService>;
let router: Router;
const routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);

describe("AppComponent", () => {
  beforeEach(async(() => {
    authServiceStub = {
      appUser$: of({
        name: "testUser",
        email: "test@gmail.com",
        isAdmin: false,
        photoURL: ""
      })
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: "", component: HomeComponentStub }
        ]),
        NgMaterialModule
      ],
      declarations: [
        AppComponent,
        NavBarComponentStub,
        HomeComponentStub,
        BlogCardComponentStub
      ],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it("should contain a navigation bar", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: HTMLElement = fixture.nativeElement;
    expect(app.querySelector("app-nav-bar")).toBeTruthy();
  });

  it("should contain a routerr outlet", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: HTMLElement = fixture.nativeElement;
    expect(app.querySelector("router-outlet")).toBeTruthy();
  });
});
