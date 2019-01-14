import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { sginUpPage } from '../sginUp/sginUp';
import { IdAuthProvider } from '../../providers/id-auth/id-auth';



@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
EM = {

  email : "",
  password : ""
  
}


  constructor(public navCtrl: NavController,
     public auth: IdAuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }


  golog(){
   this.auth.logIn(this.EM.email,this.EM.password)
  // console.log(this.EM)
  }

 reg(){
  this.navCtrl.setRoot(sginUpPage);


}

}
