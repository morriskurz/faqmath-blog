import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthService, AuthServiceMock } from '../../services/auth.service';
import { of } from "rxjs";

import { NavBarComponent } from "./nav-bar.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { NgMaterialModule } from '../../ng-material/ng-material.module';

let authServiceStub: Partial<AuthService>;

describe("NavBarComponent", () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    const authServiceMock = new AuthServiceMock();
    TestBed.configureTestingModule({
      imports: [
        NgMaterialModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [NavBarComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
