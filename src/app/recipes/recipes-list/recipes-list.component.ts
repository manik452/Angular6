import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipesArray: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Test Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Second Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Third Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipSelected(receipe: RecipeModel) {
    this.recipeWasSelected.emit(receipe);
  }
}
