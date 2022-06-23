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
  public pselectedDpto: DepartamentoI = { id:'11', name: 'Bogotá' };
  public pdpto!: DepartamentoI[];
  public pselectedCity: CiudadI = { id:'11001', departamentoId:'11', name: 'BOGOTÁ, D.C.'  };
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
  fecha1 = new Date();
    
  constructor(private fb: FormBuilder,  private datasvc: DatosService, private toastService:ToastService, private combuscolfeService: CombuscolfeService) 
  {
    /*this.iniciaFormulario();*/
  }

  ngOnInit(): void 
  {
    this.pdpto= this.datasvc.getDepartamentos();
    this.ciudadesSeleccionadas = this.datasvc.getCiudades();    
  } 
  
  continuar()
  {
    if( this.ok )
    {
    
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

      if(exito)
          this.irVerificar();      
    }
    else
    {
      this.toastService.onShowMessage.emit( "Debes aceptar los términos y condiciones para continuar" );
      this.error = ("Debes aceptar los términos y condiciones para continuar");
    }   
  }

  onSelect(id: string): void 
  { 
    this.ciudadesSeleccionadas = this.datasvc.getCiudades().
    filter(dpt => dpt.departamentoId == id);
  }


  validarDocumento()
  {
    let exito = false;
    let regex= new RegExp( /([0-9]){7,12}/g );

    this.error = '';
    
    if( regex.test(this.documento) != true ) 
    {
      this.error = ("El numero de documento esta mal escrito, por favor verificar");
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }


  validarTipodocumento()
  {
    let exito = false;
    let ltdocumento= null;
    
    if( this.tipodocumento == ltdocumento) 
    {  
      this.error = ("El tipo de documento debe ser seleccionado, por favor verificar.");
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }
  

  validarTipopersona()
  {
    let exito = false;
    let ltdocumento= null;
    
    if( this.tipopersona == ltdocumento) 
    {
      this.error = ("El tipo de persona debe ser seleccionado, por favor verificar.");
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }


  validarRegimen()
  {
    let exito = false;
    let ltdocumento= null;

    if( this.regimen == ltdocumento) 
    {
      this.error = ("El tipo de regimen debe ser seleccionado, por favor verificar.");
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }

  validarRazonsocial()
  {
    
    let exito = false;
    /*let regex= new RegExp( /[^a-z][A-Z ]{10,50}/g );*/
    let regex= new RegExp( /[^a-z. ][A-Z. ]{1,50}/g );
    this.error = '';
    
    if( regex.test(this.razonsocial) != true ) 
    {
      this.error =  ( "Razón social esta mal escrito o vacio, por favor verificar." );
    } 
    else
    {
      exito = true;
    }

    return exito; 

    return true;
  }

  validarEmail(){

    let exito = false;
    let regex= new RegExp( /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g );

    this.error = '';
    if( regex.test(this.email) != true ) 
    {
      this.error = ("El email esta mal escrito, por favor verificar. ");  
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }

  validarConfirmaremail()
  {

    let exito = false;
    let regex= new RegExp( /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g );
    this.error = '';
    
      if( regex.test(this.confirmaremail) != true ) 
      {
        this.error = ( "La confirmación del correo esta mal escrito, por favor verificar." );
      } 
      else
      {
        exito = true;
      }

      return exito; 
  }
    
  validarCelular()
  {

    let exito = false;
    let regex= new RegExp( /([0-9]){10,14}/g );

    this.error = '';
    if( regex.test(this.celular) != true ) 
    {
      this.error = ( "El celular esta mal escrito, por favor verificar." );
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }

  validarDireccion(){

    let exito = false;
    let regex= new RegExp( /^([A-Za-z]\s*){1,50}/g );
    this.error = '';
    
    if( regex.test(this.direccion) != true ) 
    {
      this.error = ( "La dirección esta mal escrito, por favor verificar." );
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }

  compararCorreos()
  {
    let exito = false;
    this.error = '';

    if(this.email == this.confirmaremail)
    {
      exito= true;
    }
    else
    {
      this.error = ( "El correo electrónico para la facturación electrónica no esta confirmado de manera correcta" );
    }

    return exito;
  }

  validarCity()
  {
    let exito = false;
    let vid = 0;
  
    if( this.pselectedCity.id == 'vid') 
    {
      this.error = ("Por favor seleccione la ciudad, por favor verificar.");
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }

  validarRut()
  {
    let exito = false;
    let ltdocumento= null;

    if( this.rut == ltdocumento) 
    {
      this.error = ("Debes adjuntar el RUT, por favor verificar.");
    } 
    else
    {
      exito = true;
    }

    return exito; 
  }

  setRut(event:any){
    const file:File = event.target.files[0];
    this._rut = file.name;
    this.getBase64(file,this);
  }

  getBase64(file:File, component:SigninComponent) 
  {
    var reader = new FileReader();
    var base64;
    
    reader.readAsDataURL(file);
    reader.onload = function () {
      component._rutb64
      base64=reader.result?.toString().split(',').pop();
      component._rutb64 = base64!;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

    irVerificar(){
  
    this.combuscolfeService.signIn(this.tipopersona, this.razonsocial, this.email, this.celular, this.documento, this.tipodocumento,
    this.pselectedDpto.id.toString(), this.direccion, country, this.pselectedCity.id.toString(), tax_level_code, this.regimen, tax_id, this._rut, 
    this._rutb64).subscribe(data=>{
      console.log("Datos", data);
    });
  }

}
