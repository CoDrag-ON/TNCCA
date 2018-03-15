import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MessageProvider } from '../providers/message/message';
import { HttpClientModule } from '@angular/common/http';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyB8fgEcen6US2HR7v3RgNWA20MB-wy_Cqc",
    authDomain: "cyril-2d6a1.firebaseapp.com",
    databaseURL: "https://cyril-2d6a1.firebaseio.com",
    projectId: "cyril-2d6a1",
    storageBucket: "cyril-2d6a1.appspot.com",
    messagingSenderId: "335454996480"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider
  ]
})
export class AppModule {}
