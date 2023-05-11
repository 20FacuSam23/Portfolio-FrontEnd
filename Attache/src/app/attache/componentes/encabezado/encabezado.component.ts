import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttacheService } from 'src/app/servicios/attache.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {


  miAttache:any;
  constructor(private datosAttache:AttacheService, private router: Router) { }
  ngOnInit(): void {
    this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
      this.miAttache=data;
    });
  }
  onLogOut(): void {
   
    window.location.reload();

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