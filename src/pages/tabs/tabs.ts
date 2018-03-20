import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { ForumPage } from '../forum/forum';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'HomePage';

  tab2Root = 'SongsPage';
  tab3Root = 'AboutPage';

  constructor(public navCtrl: NavController) {

  }

  openChat()
  {
    this.navCtrl.push(ForumPage)
  }
}
