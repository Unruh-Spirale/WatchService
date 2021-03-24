import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {WatchesModule} from './watches/watches.module';
import {WatchesService} from './watches/watches.service';
import {CoreModuleModule} from './core-module/core-module.module';
import {RouterModule} from '@angular/router';
import {WatchesListComponent} from './watches/watches-list/watches-list.component';
import {AppRoutingModule} from './app-routing.module';
import {WatchesRoutingModule} from './watches/watches-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WatchesModule,
    CoreModuleModule,
    AppRoutingModule,
    WatchesRoutingModule
  ],
  providers: [ WatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
