import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list.component';


const ROUTES : Routes  = [
  // {path: , component: }
  {path: '', component: ListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RoutingModule { }
