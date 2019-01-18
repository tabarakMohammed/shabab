import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DitailsPage } from '../ditails/ditails';
import{DatabaseProvider} from '../../providers/database/database'
import { AngularFireDatabase  } from '@angular/fire/database';
import { IdAuthProvider } from '../../providers/id-auth/id-auth';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  itemsRef:any;
  myObject
  info = <any>[]

  constructor(public navCtrl: NavController,
     private dbp:DatabaseProvider,
     private db:AngularFireDatabase,
     private aut : IdAuthProvider  ) {
      
    this.downloadData()

     }
 
  
     
      

downloadData(){

    
       this.itemsRef = this.db.object('/dataPass/passedInfo');
       this.itemsRef.snapshotChanges().subscribe(actions =>{
        if(actions.payload.val() != null || actions.payload.val()!= undefined)
        {
         this.myObject = Object.entries(actions.payload.val())
          console.log(this.myObject)
        } else {

          alert('noData')
        }
          });
       



 
  }





  det(x){

    this.navCtrl.push(DitailsPage);
    this.dbp.gitOne(x)
     console.log(x)

   }

   logOut(){
    this.aut.logOut()

   }
 
   goToAbout(){
    this.navCtrl.push(AboutPage);

 }

  
 
}
