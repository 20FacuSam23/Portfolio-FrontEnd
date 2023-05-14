import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
})
export class EditarExperienciaComponent implements OnInit {
experiencia: Experiencia=null;
constructor (private experienciaService:ExperienciaService, private activateRoute:ActivatedRoute, private router:Router){}
ngOnInit(): void {
  const id = this.activateRoute.snapshot.params['id'];
  this.experienciaService.detail(id).subscribe(
    data=>{
      this.experiencia = data;
    },err=>{
      alert("Error al modificar experiencia");
      this.router.navigate(['/attache/experiencia']);
    }
  )
}
onUpdate():void{
  const id=this.activateRoute.snapshot.params['id'];
  this.experienciaService.update(id, this.experiencia).subscribe(
    data=>{
      this.router.navigate(['/attache/experiencia']);
    },err=>{
      alert("Error al modificar experiencia");
      this.router.navigate(['/attache/experiencia']);
    }
  )
}

}