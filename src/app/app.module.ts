import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {FormsModule} from '@angular/forms';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { IonicStorageModule } from '@ionic/storage';

 

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
import { SongsProvider } from '../providers/songs/songs';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ModelProvider } from '../providers/model/model';
import { ModelPage } from '../pages/model/model';
import { EventCommentProvider } from '../providers/event-comment/event-comment';
import { UserProvider } from '../providers/user/user';
import { Camera } from '@ionic-native/camera';
import { TodayMessagePage } from '../pages/today-message/today-message';
import { AboutTnccaPage } from '../pages/about-tncca/about-tncca';

import { CallNumber } from '@ionic-native/call-number';
import { MessageModelPage } from '../pages/message-model/message-model';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { MsgCommentsProvider } from '../providers/msg-comments/msg-comments';
import { AboutPage } from '../pages/about/about';


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
    AddNewsPage,
    AddSongsPage,
    AdminPage,
    AllSongsPage,
    AllNewsPage,
    ModelPage,
    TodayMessagePage,
    MessageModelPage,
    AboutPage
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    LoginPage,
    TabsPage,
    AddNewsPage,
    AddSongsPage,
    AdminPage,
    AllSongsPage,
    AllNewsPage,
    ModelPage,
    TodayMessagePage,
    MessageModelPage,
    AboutPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider,
    AuthProvider,
    NewsProvider,
    ToastProvider,
    SongsProvider,
    InAppBrowser,
    FileTransfer,
    File,
    ModelProvider,
    EventCommentProvider,
    UserProvider,
    Camera,
    CallNumber,
    StreamingMedia,
    MsgCommentsProvider
  ]
})
export class AppModule {}
