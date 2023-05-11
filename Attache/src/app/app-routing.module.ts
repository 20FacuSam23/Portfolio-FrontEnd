import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';


import { CommonModule } from '@angular/common';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [  
  
  
  {path: 'login', component: LoginComponent},
  {path: 'attache', 
 loadChildren:() => import ('./attache/attache.module').then(m=>m.AttacheModule)},
 {path: 'registro', component:RegistroComponent},
  //{path: '**', redirectTo: 'attache'},
  {path: '',redirectTo:'login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
