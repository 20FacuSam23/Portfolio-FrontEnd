import { Component, OnInit } from '@angular/core';
import {CargarScriptService} from "src/app/cargar-script.service"
import { faLinkedin, faYoutube, faFacebook, faInstagram, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faPlus, faNetworkWired, faCircleNodes, faFingerprint} from '@fortawesome/free-solid-svg-icons';
import { AttacheService } from 'src/app/servicios/attache.service';
@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})

export class CambioComponent implements OnInit {
  miAttache:any;
  myLinkedin = faLinkedin
  faLinkedin = faLinkedin
  faYoutube = faYoutube
  faFacebook = faFacebook
  faInstagram = faInstagram
  faGithub = faGithub
  faGoogle = faGoogle
  faDowload = faDownload
  faPLus= faPlus
  faNetworkWired = faNetworkWired
  faCircleNodes = faCircleNodes
  faFingerprint = faFingerprint

  constructor(private datosAttache:AttacheService,  _CargaScripts:CargarScriptService){ _CargaScripts.Carga(["js/script"]);}
  ngOnInit():void{
   this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
    this.miAttache=data;
  });
  }
  }


  



