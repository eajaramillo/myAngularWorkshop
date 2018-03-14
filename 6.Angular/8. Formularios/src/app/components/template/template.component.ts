import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }
    `]
})
export class TemplateComponent implements OnInit {
  usuario:Object = {
    "nombre":null,
    "apellido":null,
    "correo":null,
    "pais":"",
    "genero":"Hombre",
    acepta:false
  };

  paises = [{
    codigo:"CRI",
    nombre:"Costa Rica"
  },
  {
      codigo:"ESP",
      nombre:"España"
  },
  {
      codigo:"COL",
      nombre:"Colombia"
  }];

  generos:string[] = ["Hombre", "Mujer","Si definir"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    // console.log("formulario posteado");
    console.log("ngForma", forma);
    console.log("Valor", forma.value);

    console.log("Usuario",this.usuario);
  }

}
