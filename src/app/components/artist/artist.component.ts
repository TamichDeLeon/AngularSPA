import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

artista: any = {};
topTrack: any[] = [];
  constructor( private _activatedRoute: ActivatedRoute,
               public _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params
                  .map(params => params['id'])
                  .subscribe( id =>{
                    console.log(id);
                    this._spotifyService.obtenerArtista(id)
                          .subscribe( datos =>{
                            console.log(datos)
                            this.artista = datos;
                          });

                    this._spotifyService.obtenerTop(id)
                          .map((params:any) => params.tracks)
                          .subscribe( top =>{
                            console.log(top);
                            this.topTrack = top;
                          });
                  });





  }

}
