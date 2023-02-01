import { Component, OnInit } from '@angular/core';
import { AttacheService } from 'src/app/servicios/attache.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  miAttache:any;
  constructor(private datosAttache:AttacheService){}
  ngOnInit():void{
   this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
    this.miAttache=data;
  });
  }
  }