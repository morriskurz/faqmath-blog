import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditorComponent } from './blog-editor.component';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

describe('BlogEditorComponent', () => {
  let component: BlogEditorComponent;
  let fixture: ComponentFixture<BlogEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMaterialModule, FormsModule, CKEditorModule],
      declarations: [ BlogEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
