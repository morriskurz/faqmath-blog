import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareButtonsConfig } from '@ngx-share/core';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { MatSliderModule } from '@angular/material/slider';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BlogComponent } from './components/blog/blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { Excerpt } from './customPipes/excerpt';
import { Slug } from './customPipes/slug';
import { SocialShareComponent } from './components/social-share/social-share.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { BlogSearchComponent } from './components/article-search/blog-search.component';
import { AddBlockComponent } from './components/add-block/add-block.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatSidenavModule, MatIconRegistry } from '@angular/material';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NotificationComponent } from './components/notification/notification.component';
import { Deployment } from 'app/shared/deployment.service';
import { DocumentService } from './documents/document.service';
import { GaService } from './shared/ga.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LocationService } from './shared/location.service';
import { NavigationService } from './services/navigation.service';
import { ScrollService } from './shared/scroll.service';
import { ScrollSpyService } from './shared/scroll-spy.service';
import { SearchService } from './search/search.service';
import { TocService } from './shared/toc.service';
import { CurrentDateToken, currentDateProvider } from './shared/current-date';
import { WindowToken, windowProvider } from './shared/window';
import { LoggerService } from './shared/logger.service';
import { DeploymentService } from './shared/deployment.service';

const customConfig: ShareButtonsConfig = {
  include: [
    'facebook',
    'twitter',
    'linkedin',
    'reddit',
    'whatsapp',
    'telegram',
    'print',
    'email'
  ],
  theme: 'circles-dark',
  autoSetMeta: true,
  twitterAccount: ''
};

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CommentsComponent,
    HomeComponent,
    NavBarComponent,
    ScrollerComponent,
    BlogEditorComponent,
    BlogCardComponent,
    Excerpt,
    Slug,
    SocialShareComponent,
    PaginatorComponent,
    AuthorProfileComponent,
    BlogSearchComponent,
    AddBlockComponent,
    TextBlockComponent,
    SideNavComponent,
    NavMenuComponent,
    NavItemComponent,
    TopMenuComponent,
    NotificationComponent
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    ShareButtonsModule.withConfig(customConfig),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirePerformanceModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    MatSidenavModule,
    MatSliderModule,
    CKEditorModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'page/:pagenum', component: HomeComponent },
      {
        path: 'addpost',
        component: BlogEditorComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'editpost/:slug',
        component: BlogEditorComponent,
        canActivate: [AdminAuthGuard]
      },
      { path: 'blog/:slug', component: BlogComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [
    Slug,
    DeploymentService,
    DocumentService,
    //{ provide: ErrorHandler, useClass: ReportingErrorHandler },
    GaService,
    LoggerService,
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    LocationService,
    //{ provide: MatIconRegistry, useClass: CustomIconRegistry },
    NavigationService,
    ScrollService,
    ScrollSpyService,
    SearchService,
    //svgIconProviders,
    TocService,
    { provide: CurrentDateToken, useFactory: currentDateProvider },
    { provide: WindowToken, useFactory: windowProvider },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
