import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AboutPage } from '../about/about';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  upinfo ={
    name: '' ,
    phone : '',
    province : '',
    HelpType:'',
    letter : ''
   
     }

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,  public dp : DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  addInfo(){   

    console.log(this.upinfo.name)

    if (this.upinfo.name == '' || this.upinfo.phone == ''
     || this.upinfo.province == ''
        || this.upinfo.letter == '' || this.upinfo.HelpType == '') {
      //alart erro
 

      alert(' خطأ في الأدخال، جميع الحقول مطلوبة')

      

    }  
     else {

     this.dp.addDataHelp(this.upinfo)
         for (let index  in this.upinfo) {
               this.upinfo[index] = ''
               }

         }
  }





  backTOHome(){
    this.navCtrl.parent.select(0);
  }

   goToAbout(){
    this.navCtrl.push(AboutPage);

 }

}
