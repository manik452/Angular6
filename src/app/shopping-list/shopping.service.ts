import {Ingredian} from '../shared/ingredian.model';

export class ShoppingService {
  private ingrediants: Ingredian[] = [
    new Ingredian('Apple', 5),
    new Ingredian('Tomato', 7),
    new Ingredian('Mango', 10)
  ];
  getIngredian() {
    return this.ingrediants.slice();
  }
}
