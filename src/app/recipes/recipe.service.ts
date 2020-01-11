import {RecipeModel} from './recipes-list/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredian} from '../shared/ingredian.model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();
  private recipesArray: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Test Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY'
      , [new Ingredian('sf', 12), new Ingredian('sf', 12)]),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Second Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY',
      [new Ingredian('sf', 12), new Ingredian('sf', 12)]),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Third Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY',
      [new Ingredian('sf', 12), new Ingredian('sf', 12)])
  ];

  constructor(private shoppingService: ShoppingService) {
  }

  getRecipes() {
    return this.recipesArray.slice();
  }

  addIngredintsToShoppingList(ingredian: Ingredian[]) {
    this.shoppingService.addIngredients(ingredian);
  }
}
