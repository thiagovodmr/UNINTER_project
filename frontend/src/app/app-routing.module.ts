import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { QueueComponent } from './components/queue/queue.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path : "", loadChildren: () => import("./components/list/module/list.module").then( (l) => l.ListModule)},
  {path: "list", loadChildren: () => import("./components/list/module/list.module").then( (l) => l.ListModule)},
  {path: "car", component: CarComponent},
  {path: "queue", component: QueueComponent},
  {path: "graphics", component: GraphicsComponent},
  {path: "register", component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
