import { Component, OnInit , ViewChild,ElementRef,Output,EventEmitter} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') itemName:ElementRef;
@ViewChild('amountInput') itemAmount:ElementRef;
//@Output() shoppingItem=new EventEmitter<Ingredients>();



  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  onShoppingAdd(){

   // this.shoppingItem.emit({ name: this.itemName.nativeElement.value, amount: this.itemAmount.nativeElement.value})
    this.shoppingService.onAddIng({ name: this.itemName.nativeElement.value, amount: this.itemAmount.nativeElement.value });
  }

}
