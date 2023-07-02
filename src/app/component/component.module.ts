import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    ContactFormComponent
  ]
})
export class ComponentModule { }
