import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipesArray: RecipeModel[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    this.recipesArray = this.recipeService.getRecipes();
  }

  ngOnInit() {
    this.recipesArray = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  /*onRecipSelected(receipe: RecipeModel) {
    this.recipeWasSelected.emit(receipe);
  }*/
}
