import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TimeSheetEntryComponent } from './time-sheet-entry/time-sheet-entry.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'users', component: UserComponent },
  { path: 'userslist', component: UserListComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'timesheet', component: TimeSheetEntryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
