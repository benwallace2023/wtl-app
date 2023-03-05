import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/User';
import { AngularFireAuth } from '@angular/fire/compat/auth'
//import * as firebase from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import 'firebase/compat/auth'; 
import { UserRegister } from 'src/app/model/user/UserRegister';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth :  AngularFireAuth) {}
    
    register(userRegister: UserRegister) : Observable<void>{
      return new Observable<void>(observer => {
        setTimeout(() => {
          if(userRegister.email == "error@mail.com"){
            observer.error({message: "email already exists"});
          }else {observer.next();
          }    observer.complete() ;
      },3000)       
        })
      }
   


  recoverEmailPassword(email: string): Observable<void>{
return new Observable<void>(observer => {
   this.auth.sendPasswordResetEmail(email).then(() => {
    observer.next();
    observer.complete();
   }).catch((error:any) => {
observer.next(error);
observer.complete();
   })
})

  }

login(email:string, password: string): Observable<User>{
  return new Observable<User>(observer => {
   this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>{
   this.auth.signInWithEmailAndPassword(email, password)
   .then((firebaseUser: firebase.defauflt.auth.Credential) => {
    observer.next({email, id: firebaseUser.user.uid});
    observer.complete();
   }).catch((error:any) => {
    observer.error(error);
    observer.complete();
   })
  })
})
}
}