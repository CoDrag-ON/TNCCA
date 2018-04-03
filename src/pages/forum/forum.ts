import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs';



@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  Messages:Observable<any[]>

  message:string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   ) {

  }

 
 

}
