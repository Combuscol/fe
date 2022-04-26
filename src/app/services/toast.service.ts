import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  onShowMessage = new EventEmitter<string>();
  mensajeShow = new EventEmitter<string>();
  mensajeHide = new EventEmitter();

  constructor() { }
}
