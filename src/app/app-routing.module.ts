import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {WatchesListComponent} from './watches/watches-list/watches-list.component';
import {NewWatchComponent} from './watches/new-watch/new-watch.component';
import {AuthGuard} from './auth/auth.guard';

const APP_ROUTE: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'watches', component: WatchesListComponent, canActivate: [AuthGuard]},
  {path: 'new-watch', component: NewWatchComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTE)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
