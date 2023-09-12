import { Component, OnInit } from '@angular/core';
import { SwitchService} from 'src/app/services/switch.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})

export class ConfirmarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private confirmarSS: SwitchService) { }

  ngOnInit(): void {
  }

  closeConfirmar(){
    this.confirmarSS.$confirmar.emit(false);

  }
 

}
