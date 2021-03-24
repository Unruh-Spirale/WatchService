import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ZlotyPipe } from './pipes/zloty.pipe';
import { ImportantDirective } from './directives/important.directive';


@NgModule({
  declarations: [HeaderComponent, ZlotyPipe, ImportantDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ZlotyPipe,
    ImportantDirective
  ]
})
export class SharedModuleModule { }
