import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
nuevoUsuario!:NuevoUsuario;
nombreUsuario!:string;
password! : string;
nombre!:string ;
email!: string;

errMsj!: string;
  constructor(private tokenService: TokenService, private authService:AuthService, private router:Router){}
  
 
  onLogin():void{
this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario, this.email,this.password); 
this.authService.nuevo(this.nuevoUsuario).subscribe(data=>{
  this.router.navigate(['/login'])},err =>{
    this.errMsj = err.error.mensaje;
    console.log(this.errMsj);
  
})

  }

  ngOnInit():void{
    
  }

}
