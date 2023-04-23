import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprendizajeComponent } from './componentes/aprendizaje/aprendizaje.component';
import { CambioComponent } from './componentes/cambio/cambio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { VidaComponent } from './componentes/vida/vida.component';
import {LoginComponent} from './login/login.component';
import { AttacheComponent } from './componentes/attache/attache.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

const routes: Routes = [
  {path: 'encabezado', component: EncabezadoComponent},
  {path:'Attache', component: AttacheComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cambio', component: CambioComponent},
  {path: 'vida', component:VidaComponent},
  {path: 'sobremi', component:SobreMiComponent},
  {path: 'aprendizaje', component: AprendizajeComponent},
  {path: '',redirectTo:'iniciar-sesion',pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
