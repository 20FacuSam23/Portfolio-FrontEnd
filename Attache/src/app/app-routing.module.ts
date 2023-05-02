import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprendizajeComponent } from './componentes/aprendizaje/aprendizaje.component';
import { CambioComponent } from './componentes/cambio/cambio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { VidaComponent } from './componentes/vida/vida.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { LoginComponent } from './componentes/login/login.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AuthGuard } from './guardia/auth.guard';
import {PagenotfoundComponent} from './componentes/pagenotfound/pagenotfound.component'
const routes: Routes = [  
  {path: 'encabezado', component: EncabezadoComponent, canActivate: [AuthGuard]},
  {path: 'cambio', component: CambioComponent},
  {path: 'vida', component:VidaComponent},
  {path: 'sobremi', component:SobreMiComponent},
  {path: 'aprendizaje', component: AprendizajeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent},
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
