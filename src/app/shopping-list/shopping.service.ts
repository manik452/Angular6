import {Ingredian} from '../shared/ingredian.model';
import {EventEmitter} from '@angular/core';

export class ShoppingService {
  public ingredientschange = new EventEmitter<Ingredian[]>();
  private ingrediants: Ingredian[] = [
    new Ingredian('Apple', 5),
    new Ingredian('Tomato', 7),
    new Ingredian('Mango', 10)
  ];

  getIngredian() {
    return this.ingrediants.slice();
  }

  addIngredian(ingredian: Ingredian) {
    this.ingrediants.push(ingredian);
    this.ingredientschange.emit(this.ingrediants.slice());
  }

  addIngredients(ingredian: Ingredian[]) {
    this.ingrediants.push(...ingredian);
  }
}
