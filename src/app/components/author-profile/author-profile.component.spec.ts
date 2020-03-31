import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileComponent } from './author-profile.component';
import { NgMaterialModule } from '../../ng-material/ng-material.module';

describe('AuthorProfileComponent', () => {
  let component: AuthorProfileComponent;
  let fixture: ComponentFixture<AuthorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMaterialModule],
      declarations: [ AuthorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
