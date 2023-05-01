
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
uri = 'http://localhost:3000/api';
//token;
  constructor(private http:HttpClient, private router:Router) { }
  login(email:string, password:string){
this.http.post(this.uri + '/authenticate', {email: email, password:password})
.subscribe((resp: any)=>{
  this.router.navigate([EncabezadoComponent]);
  localStorage.setItem('auth_token', resp.token);
});

  }
  logout () {
  localStorage.removeItem('token');
}
public get logIn(): boolean{
  return (localStorage.getItem('token')!== null);
}
/*
  isLoggedIn() {
    
    const token = localStorage.getItem('token'); // The token returned *may* be null, therefore you need to make sure it is defined for `token.split` to work
if (token !== null) {
  const payload = btoa(token.split('.')[1]);
  // Depending on the token, [1] may return undefined if there were no findings to split on
  if (payload !== undefined) {
    const parsedPayload = JSON.parse(payload);
    return parsedPayload.exp > Date.now() / 1000;
  }
}

return null; // Handle this where you use the function accordingly. If you returned null, something was wrong with the token.
  }
  
*/
}