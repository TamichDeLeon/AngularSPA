import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

 artistas: any[] = [];
 urlSpotify: any = 'https://api.spotify.com/v1/';
 token: string = 'BQBcIi40PSzFK0nJw2ZktY0QKCn-4LOgYPz-esIgIFY0NuOccyLWoIzuIkLAbmFHMhK6FINylE2z9ud5aFY'
  constructor(public _http:HttpClient ) {
      console.log("Servicio Spotify listo");
  }

  getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.token
    });
    return headers;
  }

  getArtistas(termino:string){
    let url = `${ this.urlSpotify }search?query=${ termino } &type=artist&limit=20`;

    let headers = this.getHeaders();

    return this._http.get(url, {headers})
        .map ( (resp:any) => {
          this.artistas =  resp.artists.items
          return this.artistas;
        });

  }

  obtenerArtista(id:string){
    let url = `${ this.urlSpotify }artists/${ id }`;

    let headers = this.getHeaders();

    return this._http.get(url, {headers})
        // .map ( (resp:any) => {
        //   this.artistas =  resp.artists.items
        //   return this.artistas;
        // });
  }

  obtenerTop(id:string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;

    let headers = this.getHeaders();

    return this._http.get(url,{headers})


  }


}
