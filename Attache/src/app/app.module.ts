import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandComponent } from './componentes/brand/brand.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent} from './componentes/login/login.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';



import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './attache/componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';








@NgModule({
  declarations: [
    AppComponent,     
    RegistroComponent,
    NavbarComponent,
    LoginComponent,
    PagenotfoundComponent,
    
    

  
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    AppRoutingModule,   
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
