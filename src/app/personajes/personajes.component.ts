import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService, Dato } from '../servicios/datos.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  public datos:Dato[]=[];

  constructor(private _datosService:DatosService,
              private router:Router) {
               }

  ngOnInit() {
    this.datos = this._datosService.getDatos();
  }
verPersonaje(idx:number){
  this.router.navigate(['/datos',idx]);
}
}
