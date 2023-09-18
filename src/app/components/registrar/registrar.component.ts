import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetServicesService } from 'src/app/services/get-services.service';
import { respuestasolicitudCliente } from 'src/app/interfaces/rta2';
//import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})



export class RegistrarComponent implements OnInit {
  //private dialogRef: MatDialog

  listtipo: respuestasolicitudCliente[] = [];
  obtenerTipo: any =[];


 
  formData: { name: string } = { name: ''};


  constructor(private route: ActivatedRoute, private router: Router, private _getsolicitudService: GetServicesService) { }

  ngOnInit(): void {
  }

//openDialog(){
   //this.dialogRef.open(RegistrarComponent);
//}

solicitudCliente(){
  console.log('Datos enviados:', this.formData);
  this.formData = { name: ''};


  this._getsolicitudService.getsolicitudCliente(this.formData.name).subscribe((data: any) => { 
    console.log("formdata", this.formData.name);
    this.listtipo = data;
    console.log("DATA", data);
    console.log("LISTA DE TIPO", this.listtipo);


    
  });





}


}
