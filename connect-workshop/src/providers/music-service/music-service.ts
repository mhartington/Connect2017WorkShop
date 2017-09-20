import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MusicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicServiceProvider {

  constructor(public http: Http) {
  }

  loadSongs(term){
    return this.http
    .get(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        term
      )}&media=music`
    )
    .map(res => res.json())
  }
  loadSong(songId) {
    return this.http
      .get(`https://itunes.apple.com/lookup?id=${songId}`)
      .map(res => res.json());
  }


}
