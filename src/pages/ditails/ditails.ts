import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider} from '../../providers/database/database'
import { ImageViewerController } from 'ionic-img-viewer';
import { AboutPage } from '../about/about';

/**
 * Generated class for the DitailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ditails',
  templateUrl: 'ditails.html',
})
export class DitailsPage {

  x
  img
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private imageViewerCtrl: ImageViewerController,
         private dbp:DatabaseProvider) {

           this.dbp.gitEq()
           this.x = dbp.myObject
           console.log(this.x)



  }

  presentImage(myImage) {
  
    const imageViewer = this.imageViewerCtrl.create(myImage);
    imageViewer.present();
}




  ionViewDidLoad() {
 // console.log(   this.dbp.y  )
  console.log(this.x);
  
 // name
 /** 
   this.img = this.x[1].imageUrl
   console.log(this.img)
   console.log('ionViewDidLoad DitailsPage');
   */
  }
  goToAbout(){
    this.navCtrl.push(AboutPage);
  }


}
