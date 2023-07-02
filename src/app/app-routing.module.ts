import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './pages/bussiness/bussiness.component';
import { CareerComponent } from './pages/career/career.component';

const routes: Routes = [
  {
    path: '',
    component: BussinessComponent
  },
  {
    path: 'career',
    component:CareerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
