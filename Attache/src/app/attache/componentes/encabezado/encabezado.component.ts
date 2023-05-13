import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttacheService } from 'src/app/servicios/attache.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {


  isLogged = false;
 

  miAttache:any;
  constructor(private datosAttache:AttacheService, private router: Router, private tokenService:TokenService) { }
  ngOnInit(): void {
    this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
      this.miAttache=data;
      if (this.tokenService.getToken()) {
        this.isLogged = true;
    } else {
        this.isLogged = false;
    }
    });
  }
 

  login() {
    this.router.navigate(['/login'])
  }
  
  formacion() {
    this.router.navigate(['/formacion'])
  }
  
  experiencia() {
    this.router.navigate(['/experiencia'])
  }

  sobreMi() {
    this.router.navigate(['/sobreMi'])
  }
}