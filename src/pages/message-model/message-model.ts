import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the MessageModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-model',
  templateUrl: 'message-model.html',
})
export class MessageModelPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams
    ,private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageModelPage');
  }


  close(){
    this.view.dismiss();
  }


}
