import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod'

//import {Persona} from '../entidades/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string= environment.production + "persona";

  constructor(private http:HttpClient) {
console.log("El servicio está corriendo");
  }

  
}
