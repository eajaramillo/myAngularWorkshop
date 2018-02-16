import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  artistas:any[] = [];

  constructor(public http:HttpClient) {
    console.log("Servicio de spotify listo");
  }

  getArtistas(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&limit=20`;
    let headers = new HttpHeaders({
      'authorization':'Bearer BQAYLX4eaPlphlip5Z4g6wD6Q-vPKEMkcps_5Nbraf3CfgHgM1vvvfiUIMwUvn7PjJY_FerTQoFCdltcNL8'
    });

    // observable
    return this.http.get(url, {headers})
              .map((resp:any)=>{
                this.artistas = resp.artists.items;
                return this.artistas;
              });
  }

}
