import { Injectable } from '@angular/core';
import { Rta } from '../model/rta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastService } from './toast.service'; 
//import { Tracing } from 'trace_events';

@Injectable({
  providedIn: 'root'
})
export class CombuscolfeService {

  url!: string;


  constructor(private http: HttpClient, private toastService: ToastService) {
    /*this.url = "https://api.combuscol.co";*/
  this.url ="http://crm.combuscol.co.soel";


   }

   signIn(tipopersona:string, // Natural - Juridica - type
          razonsocial:string, // name
          correo1: string, // mail
          celular: string, // phone
          documento: string,  // identification
          tipodoc:string,  // Cédula - NIT etc
          dpto: string, // state
          direccion: string, // address
          country: string, // Pais "CO"
          ciudad: string, // city
          tax_level_code: string,    // "R-99-PN"    
          regimen:string, // tax_level_code_list
          tax_id: string, // "ZZ"
          rut: string,
          rut_base64: string
     ){
      
      
    var body={
      type:tipopersona,
      name:razonsocial,
      email:correo1,
      phone:celular,
      identification:documento,
      identification_type:tipodoc,
      state:dpto,
      address:direccion,
      country:country,
      city:ciudad,
      tax_level_code:tax_level_code,
      tax_level_code_list:regimen,
      tax_id:tax_id,
      rut:rut,
      rut_b64:rut_base64
    };

    var body2=JSON.stringify(body);
    console.log("cuerpo de la informacion...", body2);    

    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );

    /*let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded;charset=utf-8;');*/
    return this.http.post<Rta>(this.url + '/index.php?entryPoint=newdiancustomer&XDEBUG_SESSION_START=PHPSTORM',body2);
/*,{headers:headers}*/
    
  }
}