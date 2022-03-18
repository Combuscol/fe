import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, Input, OnInit, SimpleChanges, ɵɵpureFunction1 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CombuscolfeService } from 'src/app/services/combuscolfe.service';
import { DepartamentoI, CiudadI } from '../../model/model.interface';
import { DatosService} from '../../services/datos.service';
import { ToastService } from '../../services/toast.service';


//*declare var $: any;*/
const country = 'CO';
const tax_level_code = 'R-99-PN';
const tax_id = 'ZZ';

declare var funcion1:any; // Para utilizar las funciones javascript

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[DatosService]
})
export class SigninComponent implements OnInit {


  formulario!: FormGroup;

  public archivos: any = [];
  public pselectedDpto: DepartamentoI = { id:11, name: 'Bogotá' };
  public pdpto!: DepartamentoI[];
  public pselectedCity: CiudadI = { id:11001, departamentoId:11, name: 'BOGOTÁ, D.C.'  };
  public ciudadesSeleccionadas!: CiudadI[];
  public _rut: string = '';
  public _rutb64: string = '';
  

  @Input() fecha! : string;
  @Input() documento! : string;
  @Input() tipodocumento! : string;
  @Input() tipopersona! : string;
  @Input() regimen! : string;
  @Input() razonsocial! : string;
  @Input() email! : string;
  @Input() confirmaremail! : string;
  @Input() celular! : string;
  @Input() direccion! : string;
  @Input() rut! : string;
  @Input() rut_base64! : string;


  @Input() ok! : boolean; 
  @Input() ok2! : boolean;
  
  @Input() department! : string; 
  @Input() city!: string; 
  error! : string;
  
    
  constructor(private fb: FormBuilder, 
    private datasvc: DatosService,
    private toastService:ToastService,
    private combuscolfeService: CombuscolfeService
    )
     {
    /*this.iniciaFormulario();*/

console.log(this.datasvc.getDepartamentos());
console.log(this.datasvc.getCiudades());

   }



  ngOnInit(): void {
    /*console.log(this.datasvc.getDepartamentos());
    console.log(this.datasvc.getCiudades());*/
    
    this.pdpto= this.datasvc.getDepartamentos();
    this.ciudadesSeleccionadas = this.datasvc.getCiudades();
    
    var fecha1 = new Date();
    console.log(fecha1);
    /*this.fecha=fecha1;*/
 

  
      }

  
 
  
continuar(){

  if( this.ok ){
    
    let exito =  this.validarDocumento();
    
    if(exito) 
      exito = this.validarTipodocumento();

    if( exito )
      exito = this.validarTipopersona();

    if( exito )
      exito = this.validarRegimen();


    if( exito )
      exito = this.validarRazonsocial();

    if( exito )
      exito = this.validarEmail();

    if( exito )
      exito = this.validarConfirmaremail();

    if( exito )
      exito = this.compararCorreos();

    if( exito )
      exito = this.validarCelular();

    if( exito )
      exito = this.validarDireccion();

    if(exito){
        this.irVerificar();    
    }
  
  }
  else{
    this.toastService.onShowMessage.emit( "Debes aceptar los términos y condiciones para continuar" );

    console.log( "Debes aceptar los términos y condiciones para continuar" );
    this.error = ("Debes aceptar los términos y condiciones para continuar");
  }   
}



onSelect(id: number): void {
  console.log('Id->ID DEPARTAMENTO', id); 
     
  
  this.ciudadesSeleccionadas = this.datasvc.getCiudades().
  filter(dpt => dpt.departamentoId == id);
  
  console.log("dpt", id);
  
  
 }


validarDocumento(){

  let exito = false;
  let regex= new RegExp( /([0-9]){7,12}/g );

  this.error = '';
  if( regex.test(this.documento) != true ) {
    console.log( "El numero de documento esta mal escrito, por favor verificar." );
    this.error = ("El numero de documento esta mal escrito, por favor verificar");

   } 
  else{
    exito = true;
  }

  return exito; 
}


validarTipodocumento(){

  let exito = false;
  let ltdocumento= null;
  /*console.log("Validando tipo documento:", this.tipodocumento);*/

  if( this.tipodocumento == ltdocumento) {

    console.log( "tipo de documento debe ser seleccionado, por favor verificar." );
    this.error = ("El tipo de documento debe ser seleccionado, por favor verificar.");

  } 
  else{
    exito = true;
  }

  return exito; 
}
  

validarTipopersona(){

  let exito = false;
  let ltdocumento= null;
  /*console.log("Validando tipo documento:", this.tipodocumento);*/

  if( this.tipopersona == ltdocumento) {

    console.log( "tipo de documento debe ser seleccionado, por favor verificar." );
    this.error = ("El tipo de persona debe ser seleccionado, por favor verificar.");

  } 
  else{
    exito = true;
  }

  return exito; 
}


validarRegimen(){

  let exito = false;
  let ltdocumento= null;
  /*console.log("Validando tipo documento:", this.tipodocumento);*/

  if( this.regimen == ltdocumento) {

    console.log( "El regimen debe ser diligenciado, por favor verificar." );
    this.error = ("El tipo de regimen debe ser seleccionado, por favor verificar.");

  } 
  else{
    exito = true;
  }

  return exito; 
}

validarRazonsocial(){

  let exito = false;
  let regex= new RegExp( /[^a-z][A-Z ]{10,50}/g );
  
   
  this.error = '';
  if( regex.test(this.razonsocial) != true ) {
    console.log( "Razón social esta mal escrito o vacio, por favor verificar." );
    this.error =  ( "Razón social esta mal escrito o vacio, por favor verificar." );
  } 
  else{
    exito = true;
  }

  return exito; 
}

validarEmail(){

  let exito = false;
  let regex= new RegExp( /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g );

  this.error = '';
    if( regex.test(this.email) != true ) {
      console.log("El email esta mal escrito, por favor verificar. ");
      this.error = ("El email esta mal escrito, por favor verificar. ");
      
  } 
  else{
    exito = true;
  }

  return exito; 
}


validarConfirmaremail(){

  let exito = false;
  let regex= new RegExp( /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g );
  this.error = '';
  
    if( regex.test(this.confirmaremail) != true ) {
    console.log( "La confirmación del correo esta mal escrito, por favor verificar." );
    this.error = ( "La confirmación del correo esta mal escrito, por favor verificar." );

  } 
  else{
    exito = true;
  }

  return exito; 
}
  

validarCelular(){

  let exito = false;
  let regex= new RegExp( /([0-9]){10,14}/g );

  this.error = '';
  if( regex.test(this.celular) != true ) {
    console.log( "El celular esta mal escrito, por favor verificar." );
    this.error = ( "El celular esta mal escrito, por favor verificar." );
  } 
  else{
    exito = true;
  }

  return exito; 
}

validarDireccion(){

  let exito = false;
  let regex= new RegExp( /^([A-Za-z]\s*){1,50}/g );

  this.error = '';
  
  if( regex.test(this.direccion) != true ) {
    console.log( "La dirección esta mal escrito, por favor verificar." );
    this.error = ( "La dirección esta mal escrito, por favor verificar." );

  } 
  else{
    exito = true;
  }

  return exito; 
}

compararCorreos(){

  let exito = false;
  this.error = '';
  if(this.email == this.confirmaremail){
    exito= true;

  }else{
    console.log( "El correo electrónico para la facturación electrónica no esta confirmado de manera correcta" );
    this.error = ( "El correo electrónico para la facturación electrónica no esta confirmado de manera correcta" );
  }

return exito;

}



validarCity(){

  let exito = false;
  let vid = 0;

  
  /*console.log("Validando tipo documento:", this.tipodocumento);*/
 
  if( this.pselectedCity.id == vid) {

    console.log( "Por favor seleccione la ciudad, por favor verificar." );
    this.error = ("Por favor seleccione la ciudad, por favor verificar.");
    
    /*console.log("Departamento", validadpt);*/
    /*console.log("Ciudad", this.);*/
    console.log("Ciudad", vid);
    console.log("Ciudad", this.pselectedCity.id);

  } 
  else{
    exito = true;
  }

  return exito; 


}


/*validarRut(){

  let exito = false;
  let ltdocumento= null;
  


  if( this.rut == ltdocumento) {

    console.log( "Debes adjuntar el RUT, por favor verificar." );
    this.error = ("Debes adjuntar el RUT, por favor verificar.");

  } 
  else{
    exito = true;
  }

  return exito; 


funcion1();


}*/


capturarFile(e: any):  any{


const archivoCapturado= e;
/*console.log("Completo  ", e[0].base64); // Todo el archivo con PDF base 64 contenido*/
/*console.log("Contenido ", e[0].base64.split(";base64,")[1]); // Todo el contenido SIN PDF y BASE 64*/
/*console.log("Nombre de archivo", e[0].base64.split("base64,")[0]); // DATA:APPLICATION:PDF*/


var datos = e[0].base64.split(";base64,");
var extension = datos[0].split("/")[1];
var contenido = datos[1];
var dcto = this.documento;
this._rut = this.documento + '.' + extension;
this._rutb64 = contenido;




console.log("NOMBRE DE RUT:", this._rut);
console.log("BASE 64", this._rutb64);

console.log("Extensión", extension); //PDF
/*console.log("Extensión", datos[0].split("/")[1]); //PDF*/

console.log("Codificación Base 64 - CONTENIDO", contenido); // Contenido
/*console.log("Codificación Base 64 datos[1]", datos[1]); // Contenido*/
console.log("DOCUMENTO", dcto); // DOCUMENTO
}

irVerificar(){

    this.combuscolfeService.signIn(this.tipopersona, this.razonsocial, this.email, this.celular, this.documento, this.tipodocumento,
    this.pselectedDpto.id.toString(), this.direccion, country, this.pselectedCity.id.toString(), tax_level_code, this.regimen, tax_id, this._rut, 
    this._rutb64).subscribe(data=>{
      console.log("Datos", data);
    

  });




}

 

}
