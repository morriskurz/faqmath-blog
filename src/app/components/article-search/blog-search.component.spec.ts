import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogSearchComponent } from "./blog-search.component";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { BlogService } from '../../services/blog.service';

describe("BlogSearchComponent", () => {
  let component: BlogSearchComponent;
  let fixture: ComponentFixture<BlogSearchComponent>;

  beforeEach(async(() => {
    const blogServiceSpy = jasmine.createSpyObj("BlogService", ["searchPost"]);
    TestBed.configureTestingModule({
      imports: [
        CommonModule, // Used for ngFor
        RouterTestingModule
      ],
      declarations: [BlogSearchComponent,],
      providers: [{provide: BlogService, useValue: blogServiceSpy}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a search box", () => {
    const searchElement: HTMLElement = fixture.nativeElement;
    const searchBox = searchElement.querySelector("input");
    expect(searchBox).toBeTruthy();
  });

  it("should search for heroes when reading an input", () =>{
      expect(false).toBeTruthy();
  }) 
});
