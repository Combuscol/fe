import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// Interfaces
import { Rta2 } from '../interfaces/rta2';


@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

  url!: string;

  
  constructor(private http: HttpClient) {
   // this.url = "http://dev.combuscol.co";
   
  this.url ="https://combusapp.combuscol.com:3415";


   }

   getsolicitudCliente(tipo:any){

    console.log("TIPO...", tipo);

    console.log("RUTA...", this.url + '/api/Solicitud/ListaSolicitudClientePendiente?tipo=' + tipo);


    return this.http.get<Rta2>(this.url + '/api/Solicitud/ListaSolicitudClientePendiente?tipo=' + 'rechazado');
                                      
  }


  
}
