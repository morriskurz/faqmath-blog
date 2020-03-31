import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogCardComponent } from "./blog-card.component";
import {
  PaginatorComponent,
  PaginatorComponentStub
} from "../paginator/paginator.component";
import { NgMaterialModule } from "../../ng-material/ng-material.module";
import { Slug } from "../../customPipes/slug";
import { Excerpt } from "../../customPipes/excerpt";
import { BlogService } from "../../services/blog.service";
import { CommentService } from "../../services/comment.service";
import { AuthService, AuthServiceMock } from "../../services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { SnackbarService } from "../../services/snackbar.service";
import { NgxPaginationModule } from "ngx-pagination";
import { RouterTestingModule } from '@angular/router/testing';

describe("BlogCardComponent", () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async(() => {
    const blogServiceSpy = jasmine.createSpyObj("BlogService", [
      "getAllPosts",
      "deletePost"
    ]);
    const commentServiceSpy = jasmine.createSpyObj("CommentService", [
      "deleteAllCommentForBlog"
    ]);
    const authServiceSpy = new AuthServiceMock();
    const routeSpy = jasmine.createSpyObj("ActivatedRoute", [""]);
    const snackBarServiceSpy = jasmine.createSpyObj("SnackbarService", [
      "showSnackBar"
    ]);
    TestBed.configureTestingModule({
      imports: [
        NgMaterialModule,
        NgxPaginationModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [BlogCardComponent, PaginatorComponentStub, Slug, Excerpt],
      providers: [
        { provide: BlogService, useValue: blogServiceSpy },
        { provide: CommentService, useValue: commentServiceSpy },
        { provide: AuthService, useValue: authServiceSpy },
        //{provide: ActivatedRoute, useValue: routeSpy},
        { provide: SnackbarService, useValue: snackBarServiceSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
