import { Component, OnInit , ViewChild,ElementRef,Output,EventEmitter, OnDestroy} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
//@Output() shoppingItem=new EventEmitter<Ingredients>();
@ViewChild('f') shoppingForm:NgForm;

editMode=false;
editItemIndex:number;
editItem:Ingredients;
  subscription:Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {

    this.subscription=this.shoppingService.editingItem.subscribe((index:number)=>{
      this.editMode=true;
      this.editItemIndex=index;
      this.editItem=this.shoppingService.getIngredients(this.editItemIndex);
      this.shoppingForm.setValue({
        name:this.editItem.name,
        amount:this.editItem.amount
      })

    })
  }

  onShoppingAdd(form:NgForm){

   // this.shoppingItem.emit({ name: this.itemName.nativeElement.value, amount: this.itemAmount.nativeElement.value})
    
    if(this.editMode){
      this.shoppingService.updateIngredients(this.editItemIndex,new Ingredients(form.value.name,form.value.amount));
    }
    else{
      this.shoppingService.onAddIng({ name: form.value.name, amount: form.value.amount });
    }
    this.editMode=false;
    form.reset();

  }

  onClear(){

    this.shoppingForm.reset();
    this.editMode=false;
  }

  onDelete(){

    this.shoppingService.deleteIngredients(this.editItemIndex);
    this.shoppingForm.reset();
    this.editMode=false;
  }

}
