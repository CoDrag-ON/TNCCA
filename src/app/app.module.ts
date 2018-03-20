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
import { ForumPage } from '../pages/forum/forum';
import { AuthProvider } from '../providers/auth/auth';
import { NewsProvider } from '../providers/news/news';
import { AddNewsPage } from '../pages/add-news/add-news';
import { ToastProvider } from '../providers/toast/toast';
import { HttpModule } from '@angular/http';
import { AdminPage } from '../pages/admin/admin';
import { HomePage } from '../pages/home/home';
import { AddSongsPage } from '../pages/add-songs/add-songs';
import { AllSongsPage } from '../pages/all-songs/all-songs';
import { AllNewsPage } from '../pages/all-news/all-news';

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
    ForumPage,
    AddNewsPage,
    AddSongsPage,
    AdminPage,
    AllSongsPage,
    AllNewsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    ForumPage,
    AddNewsPage,
    AddSongsPage,
    AdminPage,
    AllSongsPage,
    AllNewsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider,
    AuthProvider,
    NewsProvider,
    ToastProvider
  ]
})
export class AppModule {}
