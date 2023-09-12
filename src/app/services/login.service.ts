import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url!: string;
  description!: string;
  hash!:string;

  constructor(private http: HttpClient) {
     
    this.url = "http://dev.combuscol.co";

   }

   login(usuario:string, clave:string) {

  
    console.log("USUARIO - CLAVE",'/service/v2/rest.php?method=login&input_type=JSON&response_type=JSON&rest_data={"user_auth":{"user_name":"' + usuario +'","password":"' + clave + '"},"application_name":"SoapTest"}');
     
    
    console.log("USUARIO - SERVICIO",usuario);
    console.log("CLAVE - SERVICIO",clave);
  
    return this.http.get( this.url  + '/service/v2/rest.php?method=login&input_type=JSON&response_type=JSON&rest_data={"user_auth":{"user_name":"' + usuario +'","password":"' + clave + '"},"application_name":"SoapTest"}');    
         
    }






}
