import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="htpp://localhost:8080/auth/login";
currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }
  IniciarSecion(credenciales:any):Observable<any>
  {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }

}