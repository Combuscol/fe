import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '../../services/toast.service';

declare var $:any;


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() mensaje! : string;
  attachToast!:boolean;
  parent!:string; 

  constructor( private toastService : ToastService ) { }

  ngOnInit(): void {
   
    $( '.mytoast' ).toast({ autohide: false });
    
    this.toastService.onShowMessage.subscribe(
      (data: string) => {
          
        if( data != null ){
  
          this.mensaje = data; 
          $( '.mytoast' ).toast({ autohide: false });
          $( '.mytoast' ).toast( 'show' );          

          setTimeout(() => {
               $('.mytoast').toast('hide');
                }, 5000);
          }          
    });

  }

}
