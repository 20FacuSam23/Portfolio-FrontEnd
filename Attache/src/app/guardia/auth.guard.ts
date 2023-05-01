
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autenticacionServicio:AutenticacionService, private authService: AuthService, private rutas: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
let currentUser=this.autenticacionServicio.UsuarioAutenticado;
if (currentUser && currentUser.accessToken)
{
  return true;
}
else{
  this.rutas.navigate(['/registro']);
  return false;
}
    }
    
  }