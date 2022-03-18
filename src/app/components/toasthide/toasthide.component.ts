import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '../../services/toast.service';



declare var $:any;

@Component({
  selector: 'app-toasthide',
  templateUrl: './toasthide.component.html',
  styleUrls: ['./toasthide.component.css']
})
export class ToasthideComponent implements OnInit {


  @Input() mensaje1! : string;
  attachToast!:boolean;
  constructor(private toastService: ToastService) {

    this.attachToast = true;
    this.toastService.mensajeShow.subscribe(
      (data: string) => {
          
        if( data != null ){

          console.log('Toast Hide', data);
          console.log('Toast Hide attachtoast', this.attachToast);
          if(this.attachToast == true){
            this.mensaje1 = data;
            let myleft=$('.container').offset().left +4;
            let mytop=$('.container').offset().top; 
              
            $('.toasthide').detach().appendTo(".container");
            $('.toasthide').offset({top:mytop,left:myleft});
            this.attachToast = false;
          }
          
          console.log('Mostrando Toast Hide');
          $('.toasthide').css("visibility","visible");
          
        }
    });

    this.toastService.mensajeHide.subscribe(() =>{
    
      $('.toasthide').css("visibility","hidden");

    });


   }

  ngOnInit(): void {
  }

}
