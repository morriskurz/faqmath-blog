import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BlogCardComponent, BlogCardComponentStub } from '../blog-card/blog-card.component';
import { AuthorProfileComponent, AuthorProfileComponentStub } from '../author-profile/author-profile.component';
import { ScrollerComponent, ScrollerComponentStub } from '../scroller/scroller.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, MatIconModule, MatButtonModule],
      declarations: [ HomeComponent, BlogCardComponentStub, AuthorProfileComponentStub, ScrollerComponentStub],
      schemas: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
