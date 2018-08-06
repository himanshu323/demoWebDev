import { Ingredients } from '../shared/ingredients.model';


export class ShoppingService{

   ingredients= [new Ingredients("Apple", 10), new Ingredients("Tomatoes", 20)];

    onAddIng(ing: Ingredients) {

        this.ingredients.push(ing);

    }

    addIngredientsFromRecipe(ingredients:Ingredients[]){


        this.ingredients.push(...ingredients);
    }
}