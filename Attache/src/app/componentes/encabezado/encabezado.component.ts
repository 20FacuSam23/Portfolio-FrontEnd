import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { AttacheService } from 'src/app/servicios/attache.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;

  miAttache:any;
  constructor(private datosAttache:AttacheService, private router: Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.datosAttache.obtenerDatos().subscribe(data =>{console.log(data);
      this.miAttache=data;
    });
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();

  }

  login() {
    this.router.navigate(['/login'])
  }
}