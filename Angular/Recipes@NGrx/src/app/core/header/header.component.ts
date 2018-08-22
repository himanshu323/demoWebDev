import { Component, OnInit , EventEmitter,Output} from '@angular/core';

import {Response} from "@angular/http"
import { HttpEvent } from '@angular/common/http';
import { AuthState } from '../../auth/reducers/auth.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogOutAction } from '../../auth/actions/auth.actions';
import { AppState } from '../../store';
import { FetchRecipe, StoreRecipe } from '../../recipes/store/recipes.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  authState:Observable<AuthState>
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
        this.authState=this.store.select("auth")

  }

  saveRecipe(){
    this.store.dispatch(new StoreRecipe());
  }

  getRecipe(){

   this.store.dispatch(new FetchRecipe());
  }

  onLogout(){
    this.store.dispatch(new LogOutAction());
  }
  
}
