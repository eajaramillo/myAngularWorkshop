import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  urlSpotify:string='https://api.spotify.com/v1/';
  token:string = 'BQAzHqMaDFJ8LrSE7rz-pkPJYtkXJXQkoq9pRa7_EK6Lc4knd3tuo7J7qDpI3Of3RifgMcgNhqNsqbRosrA';

  constructor(public http:HttpClient) {
    console.log("Servicio de spotify listo");
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer '+this.token
    });

    return headers;
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    // observable
    return this.http.get(url, {headers});
                    // .map((resp:any)=>{
                    //     return resp.tracks;
                    //   });
  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    // observable
    return this.http.get(url, {headers});
              // .map((resp:any)=>{
              //   this.artistas = resp.artists.items;
              //   return this.artistas;
              // });
  }

  // getArtistas(termino:string){
  //   let url = `${this.urlSpotify}search?query=${ termino }&type=artist&limit=20`;
  //   let headers = new HttpHeaders({
  //     'authorization':'Bearer BQDulUNhcDS182wTKCf2vBKIEBQIUHBX1ZzIxJFjwx1sBmMW0HKQB6A4S7alULY2DPQv4wVY3RDga2ydZQY'
  //   });
  //
  //   // observable
  //   return this.http.get(url, {headers})
  //             .map((resp:any)=>{
  //               this.artistas = resp.artists.items;
  //               return this.artistas;
  //             });
  // }

  getArtistas(termino:string){
    let url = `${this.urlSpotify}search?query=${ termino }&type=artist&limit=20`;
    let headers = this.getHeaders();

    // observable
    return this.http.get(url, {headers})
              .map((resp:any)=>{
                this.artistas = resp.artists.items;
                return this.artistas;
              });
  }

}
