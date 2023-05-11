import { Component, OnInit } from '@angular/core';
import { AttacheService } from 'src/app/servicios/attache.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  miAttache:any;
  constructor(private datosAttache:AttacheService){}
  ngOnInit():void{
   this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
    this.miAttache=data;
  });
  }
  }