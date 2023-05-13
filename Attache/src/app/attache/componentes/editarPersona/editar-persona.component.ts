import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit{
  persona: persona =null;
  
constructor (public imageService:ImageService,private router:Router, private personaService:PersonaService, private activateRouter: ActivatedRoute,private tokenService:TokenService){}
ngOnInit(): void {
  const id = this.activateRouter.snapshot.params['id'];
  this.personaService.detail(id).subscribe(
    data=>{
      this.persona = data;}, err=>{
        alert("Error al modificar");
        this.router.navigate([''])
      }
    
  )
}
onUpdate():void{
  const id = this.activateRouter.snapshot.params['id'];
  this.personaService.update(id, this.persona).subscribe(
    data=>{
      this.router.navigate(['/attache/attache']);
    }, err=>{
        alert("Error al modificar");
        this.router.navigate(['attache/attache'])
      }
    
  )
}




uploadImage($event:any){
  const id = this.activateRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  this.imageService.uploadImage($event, name);
}
}
