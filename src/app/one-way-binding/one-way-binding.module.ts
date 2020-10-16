import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';

import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';


@NgModule({
  declarations: [OnewaybindingComponent, DirectiveComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
  ,
  exports: [
    OnewaybindingComponent,
    DirectiveComponent
  ]
})
export class OneWayBindingModule { }
