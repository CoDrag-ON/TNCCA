import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';


/**
 * Generated class for the AboutTnccaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-tncca',
  templateUrl: 'about-tncca.html',
})
export class AboutTnccaPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private callNumber:CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutTnccaPage');
  }

  async call(number)
  {
      this.callNumber.callNumber(String(number), true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
