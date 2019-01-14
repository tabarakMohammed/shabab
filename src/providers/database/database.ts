import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DatabaseProvider {

  
   imgURL 
   list : AngularFireList<any>;
   list1 : AngularFireList<any>;
     y
     myObject

  constructor(public db: AngularFireDatabase ,
     public sd : AngularFireStorage) {

  }

   gitOne(x){
    
    this.y = x
     
  }
 
  gitEq(){

     this.db.list('/dataPass/passedInfo');
     this.db.database.ref('/dataPass/passedInfo')
    .orderByKey().equalTo(this.y)
    .on("value", (snapshot) => {
    
    console.log(snapshot.val())
    this.myObject = Object.entries(snapshot.val()) 
      });
  
      console.log(this.myObject)

  }
   



  addData(info:any){
    
    this.list = this.db.list('info');
    this.list.push(info);

  }
  

  addDataHelp(infoHelp:any) {
        
    this.list1 = this.db.list('infoHelp');
    this.list1.push(infoHelp);

    }



  uploadFile(path) {

      const id = Math.random().toString(36).substring(2);

      const pic = this.sd.ref('pictures/' + id);
            pic.putString(path,'data_url').then(()=>{
           
             /// alert('تم رفع الصورة')
          
        this.sd.storage.ref('pictures/'+ id).getDownloadURL().
         then( url => { 

          this.imgURL = url
          
          alert('تم رفع الصورة')
        })
       
       
        
          
        })
     
        return 0;
    }

    


  
  
  


  

}

