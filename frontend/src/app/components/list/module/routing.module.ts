import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../pages/list/list.component';
import { ListAddComponent } from '../pages/add/list-add.component';


const ROUTES : Routes  = [
  // {path: , component: }
  {path: '', component: ListComponent},
  {path: "add", component: ListAddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RoutingModule { }
