import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentModule { }
