import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './componentes/sobre-mi/sobreMi.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { AttacheComponet } from './attache';
import { EditarPersonaComponent } from './componentes/editarPersona/editar-persona.component';


const routes: Routes = [{
  path: '',
  children: [
    { path: 'attache', component: AttacheComponet },
    { path: 'sobreMi', component: SobreMiComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'editarPersona/:id', component: EditarPersonaComponent },
    { path: '**', redirectTo: '/attache/attache' },
  ]
}
]


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AttacheRoutingModule { }
