import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipesArray: RecipeModel[];

  constructor(private recipeService: RecipeService) {
    this.recipesArray = this.recipeService.getRecipes();
  }

  ngOnInit() {
  }

  onRecipSelected(receipe: RecipeModel) {
    this.recipeWasSelected.emit(receipe);
  }
}
