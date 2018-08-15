import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
defaultQuestion="pet";
submitted=false;
answer="";

user={
  username:'',
  email:'',
  gender:'',
  questionAnswer:'',
  secret:''
}

genders=['male','female'];
  @ViewChild("fw") signupForm:NgForm;
  suggestUserName() {

    /* this.signupForm.setValue({

      userdata:{
        username:"superuser",
        email:""
      },
      secret:"teacher",

      questionAnswer:"wdvwv",
      gender:"male"
    }) */
    const suggestedName = 'Superuser';

    this.signupForm.form.patchValue({
      userdata:{
        username:"Hello"
      }
    })
  }

  /* onSubmit(data:NgForm){

    console.log(data);


  } */

  onSubmit(){
    console.log(this.signupForm);

    this.user.username=this.signupForm.value.userdata.username;

    this.user.email=this.signupForm.value.userdata.email;

    this.user.secret=this.signupForm.value.secret;

    this.user.gender=this.signupForm.value.gender;

    this.user.questionAnswer=this.signupForm.value.questionAnswer;

    this.submitted=true;

    this.signupForm.reset();
  }
}
