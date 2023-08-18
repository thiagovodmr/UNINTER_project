import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { QueueComponent } from './components/queue/queue.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: "list", loadChildren: () => import("./components/list/module/list.module").then( (l) => l.ListModule)},
  {path: "car", component: CarComponent},
  {path: "queue", component: QueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
