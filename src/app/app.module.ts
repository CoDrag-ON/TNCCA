import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
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
import { AuthProvider } from '../providers/auth/auth';
import { NewsProvider } from '../providers/news/news';
import { ToastProvider } from '../providers/toast/toast';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';

import { SongsProvider } from '../providers/songs/songs';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { FileChooser } from '@ionic-native/file-chooser';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ModelProvider } from '../providers/model/model';
import { EventCommentProvider } from '../providers/event-comment/event-comment';
import { UserProvider } from '../providers/user/user';
import { Camera } from '@ionic-native/camera';


import { CallNumber } from '@ionic-native/call-number';
import { MessageModelPage } from '../pages/message-model/message-model';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { MsgCommentsProvider } from '../providers/msg-comments/msg-comments';
import { AboutPage } from '../pages/about/about';

import { BackgroundMode } from '@ionic-native/background-mode';




import { FilePath } from '@ionic-native/file-path';
import { MinistryPage } from '../pages/ministry/ministry';
import { SongsPage } from '../pages/songs/songs';
import { QuerysPage } from '../pages/querys/querys';
import { AdminPage } from '../pages/admin/admin';
import { SignupPage } from '../pages/signup/signup';


import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';


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
    AdminPage,
    MinistryPage,
    SongsPage,
    HomePage,
    SignupPage,
    QuerysPage, 
    SearchPipe,
    SortPipe
  
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
    TabsPage,
    AdminPage,
    MinistryPage,
    SongsPage,
    HomePage,
    QuerysPage, 
    SignupPage
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
    FileChooser,
    FilePath,
    ModelProvider,
    EventCommentProvider,
    UserProvider,
    Camera,
    CallNumber,
    StreamingMedia,
    MsgCommentsProvider,
    BackgroundMode,
  ]
})
export class AppModule {}
