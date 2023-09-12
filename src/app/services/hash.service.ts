import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';



@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() {
       
  }

 hashMD5(input:string): string {

   return CryptoJS.MD5(input).toString();
 }

}
