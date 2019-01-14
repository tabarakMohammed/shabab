import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
import { IdAuthProvider } from '../../providers/id-auth/id-auth';

@Component({
  selector: 'page-sginUp',
  templateUrl: 'sginUp.html'
})
export class sginUpPage {

  EM = {

    email : "",
    password : "",
    password1 : ""
  }
  
  name : string

  constructor(public navCtrl: NavController,
    public auth: IdAuthProvider) {

  }


   regstier(){
    console.log(this.EM )
    console.log(this.name )


       if(this.EM.password == this.EM.password1){

             this.auth.signUP(this.EM.email,this.EM.password)

      }   
          else{
             alert('كلمات السر غير متشابه')
            }
     }


  goLog(){

    this.navCtrl.setRoot(LogInPage);

  }



}
