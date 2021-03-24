import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {WatchesListComponent} from './watches/watches-list/watches-list.component';
import {NewWatchComponent} from './watches/new-watch/new-watch.component';

const APP_ROUTE: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'watches'},
  {path: 'watches', component: WatchesListComponent},
  {path: 'new-watch', component: NewWatchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTE)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
