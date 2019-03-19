import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';

import { sginUpPage } from '../pages/sginUp/sginUp';
import { CasePage } from '../pages/case/case';
import { HelpPage } from '../pages/help/help';
import { JoinusPage } from '../pages/joinus/joinus';
import { LogInPage } from '../pages/log-in/log-in';
import { PayPage } from '../pages/pay/pay';

import { DitailsPage } from '../pages/ditails/ditails';



import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { DatabaseProvider } from '../providers/database/database';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

import { AngularFireStorageModule } from '@angular/fire/storage';
//import { ImagePicker } from '@ionic-native/image-picker';
import { AngularFireAuth } from 'angularfire2/auth';

import { Camera } from '@ionic-native/camera';
import { IdAuthProvider } from '../providers/id-auth/id-auth';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicImageViewerModule } from 'ionic-img-viewer';


var config = {
 ///api from firebase
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    sginUpPage,
    CasePage,
    HelpPage,
    JoinusPage,
    LogInPage,
    PayPage,
    TabsPage,
    DitailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    sginUpPage,
    CasePage,
    HelpPage,
    JoinusPage,
    LogInPage,
    PayPage,
    TabsPage,
    DitailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    DatabaseProvider,
    AngularFireStorageModule,
    AngularFireDatabase,
    AngularFireAuth,
   // ImagePicker,
    Camera,
    InAppBrowser,
    IdAuthProvider
  ]
})
export class AppModule {}
