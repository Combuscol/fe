import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

openDialog(){
   this.dialogRef.open(RegistrarComponent);


}


}
