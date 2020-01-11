import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipes-list/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

  // @Input() receipeDetail: RecipeModel;
  @Input() receipeDetil: RecipeModel;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredintsToShoppingList(this.receipeDetil.ingredias);
  }

}
