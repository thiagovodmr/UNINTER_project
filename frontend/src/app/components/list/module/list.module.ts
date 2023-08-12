import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../pages/list/list.component';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAddComponent } from '../pages/add/list-add.component';

@NgModule({
  declarations: [
    ListComponent,
    ListAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ]
})
export class ListModule { }
