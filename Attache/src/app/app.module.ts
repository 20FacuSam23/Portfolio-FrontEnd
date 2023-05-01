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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CargarScriptService} from "./cargar-script.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistroComponent} from './componentes/registro/registro.component';
import { AttacheComponent } from './componentes/attache/attache.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';

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
    RegistroComponent,
    AttacheComponent,
    PagenotfoundComponent,
  
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
  providers: [CargarScriptService, {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent,]
})
export class AppModule { }
