import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {WatchDetailsComponent} from './watch-details/watch-details.component';
import {WatchResolveService} from './watch-resolve.service';

const WATCHES_ROUTES: Route[] = [
  {path: 'watches/:id', component: WatchDetailsComponent, resolve: {watch: WatchResolveService}}
];

@NgModule ({
  imports: [
    RouterModule.forChild(WATCHES_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class WatchesRoutingModule { }
