import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { LogInPage } from '../pages/log-in/log-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any  

  constructor(platform: Platform, statusBar: StatusBar,
     splashScreen: SplashScreen,
     public auth : AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  

  auth.authState.subscribe(user => {

    if(user){
      localStorage.setItem("myId",user.uid);
     
      this.rootPage = TabsPage
       }
      else {
       this.rootPage = LogInPage

      // localStorage.setItem("lo","no")

      } 

    })

}
}