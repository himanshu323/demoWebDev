import * as firebase from "firebase"
import { Response } from "@angular/http/src/static_response";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable()
export class AuthService{

    constructor(private router:Router){

    }

    token:string;
    signUpUser(email:string,passowrd:string){

        firebase.auth().createUserWithEmailAndPassword(email,passowrd).catch( error=>console.log(error));
    }


    async signInUser(email:string,password:string){


       await  firebase.auth().signInWithEmailAndPassword(email,password).then((data)=>{

            firebase.auth().currentUser.getIdToken().then( async(token:string)=>{
                this.token=await token;
                await console.log(this.token);
            })
        })

        await this.router.navigate(['/']);
    }


    getToken(){

        firebase.auth().currentUser.getIdToken().then((token: string) => {
            this.token = token;
            console.log(this.token);
        });
        
        return this.token;
    }

    isAuthenticated(){

        return this.token!=null;
    }


    logOut(){
        firebase.auth().signOut();
        this.token=null;
    }
}