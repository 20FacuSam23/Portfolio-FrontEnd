import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttacheRoutingModule } from './attache-routing.module';
import { SobreMiComponent } from './componentes/sobre-mi/sobreMi.component';

import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { NgCircleProgressModule } from 'ng-circle-progress';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AttacheComponet } from './attache';






@NgModule({
  declarations: [
    SobreMiComponent,
    EncabezadoComponent,
    FormacionComponent,
    HabilidadesComponent,
    ContactoComponent, 
   AttacheComponet
   
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AttacheRoutingModule, 
    NgCircleProgressModule.forRoot({}),
    CommonModule,
    
  ]
})
export class AttacheModule { }
