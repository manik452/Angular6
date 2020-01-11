import {Ingredian} from '../../shared/ingredian.model';

export class RecipeModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredias: Ingredian[];


  constructor(name: string, description: string, imagePath: string, ingredians) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredias = ingredians;
  }
}
