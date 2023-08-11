import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from '../item.component';


const ROUTES : Routes  = [
  // {path: , component: }
  {path: 'add', component: ItemComponent},


];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RoutingModule { }
