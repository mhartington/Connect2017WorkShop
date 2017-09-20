import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { MusicServiceProvider } from '../../providers/music-service/music-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public songs: any[];
  public searchTerm: string;
  constructor(
    public navCtrl: NavController,
    public music: MusicServiceProvider
  ) {
  }
  submitForm(){
    this.music.loadSongs(this.searchTerm)
    .subscribe(
      res => this.songs = res.results,
      err => console.warn(err),
      () => console.log('done')
    )
  }
  pushPage(song){
    // console.log(song)
    this.navCtrl.push('DetailPage', {
      'trackID': song.trackId
    })
  }

}
