import {RecipeModel} from './recipes-list/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredian} from '../shared/ingredian.model';
import {ShoppingService} from '../shopping-list/shopping.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanges = new Subject<RecipeModel[]>();
  private recipesArray: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Test Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY'
      , [new Ingredian('sf', 12), new Ingredian('sf', 12)])
  ];

  constructor(private shoppingService: ShoppingService) {
  }

  getRecipes() {
    return this.recipesArray.slice();
  }

  fetchRecipes(recipes: RecipeModel[]) {
    console.log('RecipeLog' + recipes);
    this.recipesArray = recipes;
    this.recipesChanges.next(this.recipesArray.slice());
  }

  getRecipe(index: number) {
    return this.recipesArray[index];
  }

  addIngredintsToShoppingList(ingredian: Ingredian[]) {
    this.shoppingService.addIngredients(ingredian);
  }
}
