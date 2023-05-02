
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autenticacionServicio:AuthGuard, private authService: AuthService, private rutas: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
let currentUser=this.autenticacionServicio.authService;
if (currentUser && currentUser.authURL)
{
  return true;
}
else{
  this.rutas.navigate(['/registro']);
  return false;
}
    }
    
  }