import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from './recipes-list/recipe.model';
import {RecipeService} from './recipe.service';
import {subscribeTo} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
      (recipe: RecipeModel) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
