import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino:string = '';

              // injection
  constructor(public _spotify:SpotifyService) {
  }

  buscarArtista(){
      //console.log(this.termino);

      if(this.termino.length == 0) {
        return;
      }
      // Loading!!
      this._spotify.getArtistas(this.termino).
          subscribe(artistas=>{
            console.log("Información lista");
            console.log(artistas);

            //Quitar el loading
          });
  }

}
