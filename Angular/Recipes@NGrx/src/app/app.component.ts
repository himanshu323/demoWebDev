import { Component } from '@angular/core';
import * as firebase from "firebase"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
   
    firebase.initializeApp({
      apiKey: "AIzaSyArXI1Aww9Hfq6Rb0I6vXeB6T29dzaEUYQ",
      authDomain: "recipe-book-c5959.firebaseapp.com",
    })
    
  }
  title = 'app';
  loadedFeature="recipe";

  onNavigation(feature:string){

  this.loadedFeature=feature;
  }
}
