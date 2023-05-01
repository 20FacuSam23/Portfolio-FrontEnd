import { Component, OnInit } from '@angular/core';
import { AttacheService } from 'src/app/servicios/attache.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/servicios/auth.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miAttache:any;
  form:FormGroup;
email='';
password='';
  constructor (public authService: AuthService, private datosAttache:AttacheService, private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router){
this.form=this.formBuilder.group(
  {
email:['',[Validators.required,Validators.email]],
password:['',[Validators.required, Validators.minLength(8)]],
deviceInfo:this.formBuilder.group({

 // deviceId:["17867868768"],
 // deviceType:["DEVICE_TYPE_ANDROID"],
 //notificationToken:["67657578eececc34"]
})
  }
)
  }
LogIn(): void{
this.authService.login(this.email,this.password)
}
logout () {
  localStorage.removeItem('token');
}
  ngOnInit(): void {
    this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
      this.miAttache=data;
    })}
  get Email()
  {
return this.form.get('email');
  }
  get Password()
  {
    return this.form.get('password')
  }
  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/attache']);
    })
  }
}