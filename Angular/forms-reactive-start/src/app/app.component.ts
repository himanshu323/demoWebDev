import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  genders = ['male', 'female'];

  forbiddenUsers=["Anna","Rohit"];

  signUpForm:FormGroup

  ngOnInit(): void {
    
    this.signUpForm=new FormGroup({
      'userdata':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.verifyForbiddenUsers.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email],this.verifyForbiddenEmails),
      }),
      
      'gender':new FormControl('male'),

      'hobbies':new FormArray([])

    })
/* 
    this.signUpForm.valueChanges.subscribe((value)=>{
      console.log(value);
    })

    this.signUpForm.statusChanges.subscribe((status)=>{
      console.log(status);
    }) */

    // this.signUpForm.setValue({
    //   'userdata':{'username':"Him",
    //   'email':'tte@tt.com'},
    //   'gender':'female',
    //   'hobbies':[]
    // })

    this.signUpForm.patchValue({
      'gender':'male'
    })
  }

  onSubmit(){

    console.log(this.signUpForm);
  }

  onAddHobbies(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);

  }

  verifyForbiddenUsers(control:FormControl):{[s:string]:boolean}{

    if(this.forbiddenUsers.indexOf(control.value)!==-1){
      return {forbiddenUser:true}
    }
    return null;
  }

  verifyForbiddenEmails(control:FormControl):Promise<any> | Observable<any>{

    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value ==="test@test.com"){
          resolve({forbriddenEmail:true})
        }
        else{
          resolve(null);
        }
      },2000);
      
    })
    return promise;
  }

}
