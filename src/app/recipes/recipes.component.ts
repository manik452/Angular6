import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Ingredian} from '../shared/ingredian.model';
import {Subscription} from 'rxjs/Subscription';
import {RecipeModel} from './recipes-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  // selectedRecipe: RecipeModel;

  private subscription: Subscription;
  private recipesArray: RecipeModel[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    /*this.recipeService.recipeSelected
      .subscribe(
      (recipe: RecipeModel) => {
        this.selectedRecipe = recipe;
      }
    );*/
    this.recipesArray = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanges
      .subscribe(
        (recipes: RecipeModel[]) => {
          this.recipesArray = recipes;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
