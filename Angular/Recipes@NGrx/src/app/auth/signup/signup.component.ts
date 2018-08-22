import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { TrySignInAction, TrySignUpAction } from '../actions/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
      const emailAddress=form.value.email;
      const password=form.value.password;
      console.log(emailAddress,password);
     // this.authService.signUpUser(emailAddress,password);

     this.store.dispatch(new TrySignUpAction({username:emailAddress,password:password}))

  }
}
