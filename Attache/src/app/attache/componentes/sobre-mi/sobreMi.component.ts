import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-sobreMi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent { /* implements OnInit {
  persona: persona[] = [];

  constructor(private personaService: PersonaService, private tokenService:TokenService) { }
isLogged=false;
ngOnInit(): void {
    this.personaService.lista();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarLista(): void {
    this.personaService.lista().subscribe(data => { this.persona = data });
  }*/
}