import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }
  
  public update(id: number, Persona:persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }
 public savePersona(persona:persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'agregar', persona);
  }  
  
  public deletePersona(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
