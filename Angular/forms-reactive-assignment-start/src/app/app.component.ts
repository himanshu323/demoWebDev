import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    
    this.projectForm=new FormGroup({
      "projectName":new FormControl(null,Validators.required,this.asyncValidProjectName),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "pStatus":new FormControl(null)

    })
  }
  projectForm:FormGroup;

  onSubmit(){
    console.log(this.projectForm.value);
  }

  verifyProjectName(control:FormControl):{[s:string]:boolean}{

    if(control.value==="Test"){
      return {forbiddenProject:true}
    }

    return null;

  }

  asyncValidProjectName(control:FormControl):Promise<any> | Observable<any>{

    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==="Test"){
          resolve({'pInvalid':true})
        }else{
          resolve(null)
        }
      },2000)
    })
    return promise;
  }
}
