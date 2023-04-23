import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BrandComponent } from './componentes/brand/brand.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { AprendizajeComponent } from './componentes/aprendizaje/aprendizaje.component';
import { VidaComponent } from './componentes/vida/vida.component';
import { CambioComponent } from './componentes/cambio/cambio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {CargarScriptService} from "./cargar-script.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { AttacheComponent } from './componentes/attache/attache.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent}
 
];
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BrandComponent,
    SobreMiComponent,
    AprendizajeComponent,
    VidaComponent,
    CambioComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    IniciarSesionComponent,
    AttacheComponent,
    
  ],
  imports: [
    
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    
  ],
  providers: [CargarScriptService,],
  bootstrap: [AppComponent,]
})
export class AppModule { }
