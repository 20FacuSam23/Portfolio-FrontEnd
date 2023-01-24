import { Component, OnInit } from '@angular/core';
import { AttacheService } from 'src/app/servicios/attache.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miAttache:any;
constructor(private datosAttache:AttacheService){}
ngOnInit():void{
 this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
  this.miAttache=data;
});
}
}