import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  mensaje ="";
  registrado = false;
  nombre: string ="";
  apellido:string ="";

  registrarUsuario(){
    this.registrado=true

    this.mensaje="usuario registrado con éxito"

    
  }
}
