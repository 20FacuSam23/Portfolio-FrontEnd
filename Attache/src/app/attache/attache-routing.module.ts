import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from 'src/app/attache/componentes/encabezado/encabezado.component'
import { SobreMiComponent } from './componentes/sobre-mi/sobreMi.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { AttacheComponet } from './attache';


const routes:Routes = [{
  path:'',
  children: [
  {path: 'attache', component: AttacheComponet},
   {path:'sobreMi',component:SobreMiComponent}, 
   {path:'formacion',component: FormacionComponent},   
   {path:'habilidades', component: HabilidadesComponent},   
   {path:'contacto', component: ContactoComponent},
   
  {path:'**', redirectTo:'/attache/attache'},    
  ]
}
]


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AttacheRoutingModule { }
