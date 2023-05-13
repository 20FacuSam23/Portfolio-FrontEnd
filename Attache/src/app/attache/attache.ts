
import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';
import { TokenService } from '../servicios/token.service';


@Component({
    selector: 'app-attache',
    templateUrl: './attache.html',
    styleUrls: ['./attache.css']
})
export class AttacheComponet implements OnInit {
    persona: persona =null;

    constructor(private personaService: PersonaService, private tokenService: TokenService) { }
    isLogged = false;
    ngOnInit(): void {
        this.cargarPersona();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarPersona(): void {
        this.personaService.detail(1).subscribe(data => { this.persona = data; }
        )

    }

}


