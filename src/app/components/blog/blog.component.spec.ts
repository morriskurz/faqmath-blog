import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { SocialShareComponentStub } from '../social-share/social-share.component';
import { CommentsComponentStub } from '../comments/comments.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ScrollerComponentStub } from '../scroller/scroller.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMaterialModule],
      declarations: [ BlogComponent, SocialShareComponentStub, CommentsComponentStub, ScrollerComponentStub ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
