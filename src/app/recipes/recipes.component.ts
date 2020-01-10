import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from './recipes-list/recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor() {
  }

  ngOnInit() {
  }

}
