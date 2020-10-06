import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  dato:any = {};

  constructor( private activatedRoute: ActivatedRoute,
                private _datosSerevice: DatosService) {
    this.activatedRoute.params.subscribe(params => {
      this.dato= this._datosSerevice.getDato( params['id']);
    });
   }

  ngOnInit() {
  }

}
