import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { SocialShareComponent } from "./social-share.component";
import { ShareButtonsModule } from "@ngx-share/buttons";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Component } from "@angular/core";

describe("SocialShareComponent", () => {
  let component: SocialShareComponent;
  let fixture: ComponentFixture<SocialShareComponent>;
  let libraryServiceSpy: jasmine.SpyObj<FaIconLibrary>;

  beforeEach(async(() => {
    const librarySpy = jasmine.createSpyObj("FaIconLibrary", [
      "addIcons",
      "getIconDefinition"
    ]);
    TestBed.configureTestingModule({
      imports: [ShareButtonsModule, HttpClientTestingModule],
      declarations: [SocialShareComponent],
      providers: [{ provide: FaIconLibrary, useValue: librarySpy }]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialShareComponent);
    component = fixture.componentInstance;
    libraryServiceSpy = TestBed.get(FaIconLibrary);
    libraryServiceSpy.addIcons.and.stub;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should add icons", () => {
    expect(libraryServiceSpy.addIcons.calls.count()).toBe(
      1,
      "spy method was called once"
    );
  });
});
