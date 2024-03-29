import { Injectable } from '@angular/core';
import { Rta2 } from '../interfaces/rta2';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastService } from './toast.service'; 
import { type } from 'jquery';
import { Rta1 } from '../model/rta1';
//import { Tracing } from 'trace_events';

@Injectable({
  providedIn: 'root'
})
export class CombuscolfeService {

  url!: string;

  
  constructor(private http: HttpClient, private toastService: ToastService) {
   // this.url = "http://dev.combuscol.co";
   
  this.url ="https://combusapp.combuscol.com:3415";


   }

   

   signIn(tipopersona:string, // Natural - Juridica - type
          razonsocial:string, // name
          primernombre: string, // primer nombre
          segundonombre: string, // segundo nombre
          primerapellido: string, // primer apellido
          segundoapellido: string, // segundo apellido
          correo1: string, // mail
          correo_alternativo_1: string, // Correo opcional 1
          correo_alternativo_2: string, // Correo opcional 2
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
          rut: string, // archivo capturado
          rut_base64: string// Base 64 del archivo capturado
        
        
       
          
     ){
       
         
     console.log("RAZON SOCIAL ANTES DEL BODY", razonsocial); 
     
    
    var bodyjuridica={
      tipo:tipopersona,
      nombre:razonsocial,
      email:correo1,
      email_alternativo_1:correo_alternativo_1,
      email_alternativo_2:correo_alternativo_2,
      telefono:celular,
      identificacion:documento,
      tipo_identificacion:tipodoc,
      codigo_dpto :dpto,
      direccion:direccion,
      codigo_pais:country,
      codigo_ciudad:ciudad,
      obligaciones:tax_level_code,
      regimen:regimen,
      identificador_tributo:tax_id,
      dv:rut,
      rut_b64:rut_base64
     };


     var bodynatural={
      tipo:tipopersona,
      first_name:primernombre,
      middle_name:segundonombre,
      surname:primerapellido,
      last_name:segundoapellido,
      email:correo1,
      email_alternativo_1:correo_alternativo_1,
      email_alternativo_2:correo_alternativo_2,
      telefono:celular,
      identificacion:documento,
      tipo_identificacion:tipodoc,
      codigo_dpto :dpto,
      direccion:direccion,
      codigo_pais:country,
      codigo_ciudad:ciudad,
      obligaciones:tax_level_code,
      regimen:regimen,
      identificador_tributo:tax_id,
      dv:rut,
      rut_b64:rut_base64
     };
    
     
     var body2='';
      
     if (tipopersona == '1'){
      console.log("cuerpo de la informacion PERSONA JURIDICA", bodyjuridica);
      body2=JSON.stringify(bodyjuridica);  
      
    }else
     {
      console.log("cuerpo de la informacion PERSONA NATURAL", bodynatural);
      body2=JSON.stringify(bodynatural);
     
    }
    
    /*var body2=JSON.stringify(body);*/

    console.log("cuerpo de la informacion. SIN CONDICIONAL", body2);    

   

   /*const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
   );*/

   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'withCredentials': 'true', 
      'Access-Control-Allow-Origin':'*',
      'method': 'POST',
      'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT"
      // This header should typically be set on the server, not in the client request.
      // Note: 'Access-Control-Allow-Origin' is a response header, not a request header.
    }),
  };


    //let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded;charset=utf-8;');
    //return this.http.post<Rta>(this.url + '/api/Solicitud/CrearClienteMaster' ,body2);
    return this.http.post<Rta2>(this.url + '/api/Solicitud/CrearClienteMaster' ,body2, httpOptions
    );

    //&XDEBUG_SESSION_START=PHPSTORM
   
    
    //return this.http.post<Rta>(this.url + '/index.php?entryPoint=newdiancustomer&XDEBUG_SESSION_START=PHPSTORM',body2);
    /*,{headers:headers}*/


  }
}