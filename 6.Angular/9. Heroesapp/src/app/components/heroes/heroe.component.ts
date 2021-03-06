import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  constructor(private heroesService_: HeroesService,
              private router:Router) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    this.heroesService_.nuevoHeroe(this.heroe)
    .subscribe(data=>{
      this.router.navigate(['/heroe',data.name])
    },
  error=>console.log(error));
  }

}
