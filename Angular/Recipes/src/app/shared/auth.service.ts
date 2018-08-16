import * as firebase from "firebase"
import { Response } from "@angular/http/src/static_response";
export class AuthService{

    token:string;
    signUpUser(email:string,passowrd:string){

        firebase.auth().createUserWithEmailAndPassword(email,passowrd).catch( error=>console.log(error));
    }


    signInUser(email:string,password:string){


        firebase.auth().signInWithEmailAndPassword(email,password).then((data)=>{

            firebase.auth().currentUser.getIdToken().then((token:string)=>{
                this.token=token;
                console.log(this.token);
            })
        })
    }


    getToken(){

        firebase.auth().currentUser.getIdToken().then((token: string) => {
            this.token = token;
        });
        
        return this.token;
    }


}