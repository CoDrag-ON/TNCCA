import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'MinistryPage';
  tab2Root = 'SongsPage';
  tab3Root = 'HomePage';
  

  constructor(public navCtrl: NavController) {
    
  }

  openChat()
  {
    this.navCtrl.push(ForumPage)
  }


  openAccount()
  {
    this.navCtrl.push(AboutPage)
  }
}
