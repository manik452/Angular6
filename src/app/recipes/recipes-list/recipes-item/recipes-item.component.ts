import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {
  }

  onSelected() {
   this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit() {
  }

}
