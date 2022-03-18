// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/Select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import * as $ from 'jquery';

// Views
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';


// Services
import { ToastService } from './services/toast.service';

// Components
import { ToastComponent } from './components/toast/toast.component';
import { ToasthideComponent } from './components/toasthide/toasthide.component';

@NgModule({

  declarations: [
    AppComponent,
    SigninComponent,
    ToastComponent,
    ToasthideComponent
       
        
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    AlifeFileToBase64Module

    
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor( private toastService:ToastService ) {
     
  }

}
