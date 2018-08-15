import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';


export class ShoppingService{

   ingredients= [new Ingredients("Apple", 10), new Ingredients("Tomatoes", 20)];

   editingItem=new Subject<number>();

   ingredientsChanged=new Subject<Ingredients[]>();

    onAddIng(ing: Ingredients) {

        this.ingredients.push(ing);

    }

    addIngredientsFromRecipe(ingredients:Ingredients[]){


        this.ingredients.push(...ingredients);
    }

    getIngredients(index:number){
        return this.ingredients[index];
    }

    updateIngredients(index:number,ingredientUpdate:Ingredients){
        this.ingredients[index]=ingredientUpdate;
        this.ingredientsChanged.next(this.ingredients);
    }

    deleteIngredients(index:number){

        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients);
    }
}