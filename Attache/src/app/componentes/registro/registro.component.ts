
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
form:FormGroup;
  constructor (private formBuilder:FormBuilder, private autenticacionService:AuthService, private ruta:Router){
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
  ngOnInit(): void {
    
  }
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
    this.autenticacionService.login(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/attache']);
    })
  }
}
