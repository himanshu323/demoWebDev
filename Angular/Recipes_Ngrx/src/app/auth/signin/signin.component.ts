import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    console.log("Hello");
  }
  onSubmit(form:NgForm){
    const emailAddress = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(emailAddress,password);

    
  }
}
