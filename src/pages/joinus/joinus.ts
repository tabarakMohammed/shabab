import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the JoinusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joinus',
  templateUrl: 'joinus.html',
})
export class JoinusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinusPage');
  }

  backTOHome(){
    this.navCtrl.parent.select(0);
  }
  /** 
open() {
  this.iab.create("www.google.com")

}
*/
  openUrl(x : string){
     window.open(x, '_system');
     }

     goToAbout(){
      this.navCtrl.push(AboutPage);
  
   }
  
}
