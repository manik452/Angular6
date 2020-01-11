import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: RecipeModel;
  @Input() index: number;
  /*onSelected() {
   this.recipeService.recipeSelected.emit(this.recipe);
  }*/

  ngOnInit() {
  }

}
