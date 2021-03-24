import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchesListComponent } from './watches-list/watches-list.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { WatchDetailsComponent } from './watch-details/watch-details.component';
import {RouterModule} from '@angular/router';
import {WatchResolveService} from './watch-resolve.service';
import { NewWatchComponent } from './new-watch/new-watch.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [WatchesListComponent, WatchDetailsComponent, NewWatchComponent],
  exports: [WatchesListComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [WatchResolveService]
})
export class WatchesModule { }
