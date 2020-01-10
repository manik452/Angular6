import {RecipeModel} from './recipes-list/recipe.model';

export class RecipeService {
  private recipesArray: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Test Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Second Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Third Recipe', 'this is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfG5pyqaocAD_giORisKdsXr0w6EjLNoVfQh0zFUflhsp-gKkY')
  ];

  getRecipes() {
   return  this.recipesArray.slice();
  }
}
