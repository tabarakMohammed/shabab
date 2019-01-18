import { Component } from '@angular/core';
import { IonicPage, NavController , AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
//import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AboutPage } from '../about/about';

/**
 * Generated class for the CasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-case',
  templateUrl: 'case.html',
})
export class CasePage {

  upinfo ={
 name: '' ,
 phone : '',
 province : '',
 letter : '',
 imageUrl:''

  }

  path : any;
  image:string;
   y
  constructor(public navCtrl: NavController, public dp : DatabaseProvider,
  public alrt : AlertController , private camera: Camera
    ) {
    console.log(this.upinfo)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasePage');
    
  }
  addInfo(){   
    //check Image exist
 
      this.upinfo.imageUrl = this.dp.imgURL


   // check all input exist


    if (this.upinfo.name == '' || this.upinfo.phone == ''
     || this.upinfo.province == ''
        || this.upinfo.letter == '' || this.upinfo.imageUrl == '') {
     
          //alart erro
      
    let alert = this.alrt.create({
        title: 'أدخال خطأ',
        subTitle: ' جميع الحقول مطلوبة بما فيها الصورة',
        buttons: ['موافق']
      });

      alert.present();

    }  else {

     this.dp.addData(this.upinfo);
      
     for (let index  in  this.upinfo) {
      this.upinfo[index] = ''
      }
        
      this.dp.imgURL = ''

    }
  }

  
 /** 
  addImage(){
   
   if(this.addImage1()){

    try {
      this.image = this.dp.imgURL;
      alert(this.image) 
    } 

    catch (error) {
      alert(error)
     }

   }
  
   
   
      
   
  }
  */

    addImage() {
    
      const options: CameraOptions = {

        

        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
      }
          
      this.camera.getPicture(options).then((imageData) => {
          
       this.path = 'data:image/jpeg;base64,' + imageData;  
       this.dp.uploadFile(this.path);

       alert(' أنتظر حتى تضهر لك رسالة تم الرفع، أضغط موافق ألأن حتى يبدأ الرفع ')

          
      }, (err) => {
       
        alert(err)

       
      })


      /** 
       let x = 0 
      while ( this.dp.uploadFile(this.path) == null  || '' ) {
          
        x = x + 1
        alert( 'loading' + x) 
      }
*/
      
    
 

     //   alert( this.dp.imgURL) 

      
    
    }
 

    backTOHome(){
      this.navCtrl.parent.select(0);
    }
      
    goToAbout(){
      this.navCtrl.push(AboutPage);
    }


}
