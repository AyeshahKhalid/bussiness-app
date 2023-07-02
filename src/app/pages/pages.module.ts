import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussinessComponent } from './bussiness/bussiness.component';
import { CareerComponent } from './career/career.component';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    BussinessComponent,
    CareerComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    BussinessComponent,
    CareerComponent
  ]
})
export class PagesModule { }
