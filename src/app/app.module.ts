// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select'; 
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';


// Servicios
import { LoginService } from '../app/services/login.service';
import { HashService } from '../app/services/hash.service';


//import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import * as $ from 'jquery';

// Views
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';

// Services
import { ToastService } from './services/toast.service';

import * as CryptoJS from 'crypto-js';

// Components
import { ToastComponent } from './components/toast/toast.component';
import { ToasthideComponent } from './components/toasthide/toasthide.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SwitchService } from './services/switch.service';

@NgModule({

  declarations: [
    AppComponent,
    SigninComponent,
    ToastComponent,
    ToasthideComponent,
    ConfirmarComponent,
    RegistrarComponent
        
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule
    
  ],
  providers: [ToastService],

  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor( private toastService:ToastService ) {
     
  }

}
