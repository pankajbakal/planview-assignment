import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { TimeSheetEntryComponent } from './time-sheet-entry/time-sheet-entry.component';
import { LogInterceptor } from './core/http-response-logger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserComponent,
    UserDetailsComponent,
    LandingPageComponent,
    UserListComponent,
    TimeSheetEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
