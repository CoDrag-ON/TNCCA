import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { AboutPage } from '../about/about';

import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'MinistryPage';
  tab2Root = 'SongsPage';
  tab3Root = 'HomePage';
  tab5Root = 'QuerysPage';

  name:string;


  

  

  constructor(public navCtrl: NavController,private storage: Storage) {

    
  }
 

  openAccount()
  {
    this.navCtrl.push(AboutPage)
  }
}
