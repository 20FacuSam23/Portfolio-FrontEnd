
import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';


@Component({
    selector: 'app-attache',
    templateUrl: './attache.html',
    styleUrls: ['./attache.css']
})
export class AttacheComponet implements OnInit {
    persona: persona = new persona("", "", "");

    constructor(public personaService: PersonaService) {
    }
    ngOnInit(): void {
        this.personaService.getPersona().subscribe(data => { this.persona = data })
    }
}

