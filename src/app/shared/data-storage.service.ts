import {RecipeService} from '../recipes/recipe.service';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeModel} from '../recipes/recipes-list/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {
  }

  putStorage() {
    return this.http.put('https://ng-recipe-book-95114.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }


  getRecipes() {
    this.http.get('https://ng-recipe-book-95114.firebaseio.com/recipe.json')
      .subscribe((response: Response) => {
        const recipes: RecipeModel[] = response.json();
        console.log(recipes);
        this.recipeService.fetchRecipes(recipes);
      });
  }

}
