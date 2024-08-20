import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../pages/list/list.component';
import { ListAddComponent } from '../pages/add/list-add.component';
import { AddComponent } from '../pages/category/add/add.component';

const ROUTES : Routes  = [
  // {path: , component: }
  {path: '', component: ListComponent},
  {path: "add", component: ListAddComponent},
  {path: "category/add", component: AddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RoutingModule { }
