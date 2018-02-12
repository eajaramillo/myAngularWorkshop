import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  // templateUrl: '../heroes/heroes.component.html'
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  heroes:Heroe[]=[];
  termino:string="";
  constructor(private _activatedRouter:ActivatedRoute,
              private _heroesService:HeroesService) {
  }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params=>{
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      this.termino = params['termino'];
    });
  }

}
