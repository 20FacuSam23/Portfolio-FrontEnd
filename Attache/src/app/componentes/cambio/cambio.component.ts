import { Component, OnInit } from '@angular/core';
import {CargarScriptService} from "src/app/cargar-script.service"
import { faLinkedin, faYoutube, faFacebook, faInstagram, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faPlus, faNetworkWired, faCircleNodes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent {
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
  


constructor(private _CargaScripts:CargarScriptService)
{
  _CargaScripts.Carga(["js/script"]);
  
}

}

