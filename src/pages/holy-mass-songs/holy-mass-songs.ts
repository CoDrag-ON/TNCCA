import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';

/**
 * Generated class for the HolyMassSongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holy-mass-songs',
  templateUrl: 'holy-mass-songs.html',
})
export class HolyMassSongsPage {

  songs:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private song:SongsProvider) {

      this.song.getAllHollyMassSongs().subscribe(data=>{
        this.songs = data;
        console.log(this.songs)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolyMassSongsPage');
  }

  play(link)
  {
    this.song.play(link);
  }



}
