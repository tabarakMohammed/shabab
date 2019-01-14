import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';




@Injectable()
export class IdAuthProvider {

  constructor(private auth:AngularFireAuth, private db:AngularFireDatabase) {
    console.log('Hello IdAuthProvider Provider');
  }

  logIn(eml,pas){
    

      this.auth.auth.signInWithEmailAndPassword(eml,pas).catch(
        error => {

          alert(' : خطأ في الأدخال' + error)

        }
      )
      
   
    
}

  signUP(emr, pwr){

      this.auth.auth.createUserWithEmailAndPassword(emr, pwr).catch(
      
        error => {

          alert('خطأ في الأدخال : ' + error)

        }
      ).then(()=>{
         
        let userInfo = {
            name : name,
            email : emr,
          }

         this.db.list('userInformation').push(userInfo)
      })
      
  
  }

  logOut(){
  this.auth.auth.signOut()
  }




}
