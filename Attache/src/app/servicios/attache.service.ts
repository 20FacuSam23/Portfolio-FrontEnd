import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttacheService {
  constructor(private http:HttpClient){}
  
  obtenerDatos():Observable<any>
  {
  return this.http.get('./assets/data/data.json');
  }
  }
/*
export class AttacheService {
  url:string="http:npinit.ddns.net:9008/api/";
constructor(private http:HttpClient){}

obtenerDatos():Observable<any>
{
return this.http.get<any>(this.url+"persona");
}
}*/
