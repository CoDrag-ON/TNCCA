import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';

import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage:any;
  loader: any;
 
  constructor(platform: Platform, public loadingCtrl: LoadingController, private storage:Storage, private backgroundMode: BackgroundMode,public statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.presentLoading();
  
    
    platform.ready().then(() => {
      this.storage.get('LoggedIn').then((result) => {
 
        if(result){
          this.rootPage = TabsPage;
        } else {
          this.rootPage = "LoginPage";
        }
 
        this.loader.dismiss();
 
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#430fa8');

      splashScreen.hide();

      
      
    });
    //this.backgroundMode.enable();
    
    

   
    
    
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loader.present();
 
  }

  
}
