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
    NavbarComponent,
  ],
  imports: [
    LoginComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [CargarScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
