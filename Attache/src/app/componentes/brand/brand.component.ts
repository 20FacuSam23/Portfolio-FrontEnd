import { Component, OnInit } from '@angular/core';
import { AttacheService } from 'src/app/servicios/attache.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
miAttache:any;
constructor(private datosAttache:AttacheService){}
ngOnInit():void{
 this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
  this.miAttache=data;
});
}
}