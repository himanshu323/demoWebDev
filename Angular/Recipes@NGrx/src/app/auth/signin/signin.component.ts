import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthState } from '../reducers/auth.reducers';
import { Store } from '@ngrx/store';
import { SignInAction, TrySignInAction } from '../actions/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store:Store<AuthState>) { }

  ngOnInit() {
    console.log("Hello");
  }
  onSubmit(form:NgForm){
    const emailAddress = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignInAction({username: emailAddress, password: password}));
    

    
  }
}
