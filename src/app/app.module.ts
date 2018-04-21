import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {FormsModule} from '@angular/forms';


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
import { SignupPage } from '../pages/signup/signup';


import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { ActivityProvider } from '../providers/activity/activity';
import { ActivityPage } from '../pages/activity/activity';
import { HolyMassSongsPage } from '../pages/holy-mass-songs/holy-mass-songs';




@NgModule({
  declarations: [

    
    MyApp,
    TabsPage,
    MinistryPage,
    SongsPage,
    HomePage,
    SignupPage,
    QuerysPage, 
    SearchPipe,
    SortPipe,
    ActivityPage,
    HolyMassSongsPage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),   
   
    HttpClientModule,
    HttpModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MinistryPage,
    SongsPage,
    HomePage,
    QuerysPage, 
    SignupPage,
    ActivityPage,
    HolyMassSongsPage
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
    ActivityProvider,
  ]
})
export class AppModule {}
