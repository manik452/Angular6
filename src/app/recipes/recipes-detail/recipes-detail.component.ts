import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipes-list/recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

 // @Input() receipeDetail: RecipeModel;
  @Input() receipe: RecipeModel;

  constructor() {
  }

  ngOnInit() {
  }

}
