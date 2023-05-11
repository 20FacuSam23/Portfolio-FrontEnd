import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandComponent } from './componentes/brand/brand.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './componentes/login/login.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';



import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';








@NgModule({
  declarations: [
    AppComponent,  
    BrandComponent,
    FooterComponent,
    RegistroComponent,
    NavbarComponent,
    LoginComponent,
    PagenotfoundComponent,
    

  
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,   
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: 
  [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
