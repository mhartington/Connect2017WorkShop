import { Component } from '@angular/core';
import { MusicServiceProvider} from '../../providers/music-service/music-service';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'detail/:trackID',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public currentSong
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public music: MusicServiceProvider
  ) {
    // this.currentSong = this.navParams.get('currentTrack')
  }

  ionViewWillLoad(){
    let songId = this.navParams.get('trackID')
    this.music.loadSong(songId)
    .subscribe(
      res => this.currentSong =  res.results[0]
    )
  }

}
