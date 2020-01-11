import {Ingredian} from '../shared/ingredian.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingService {
  public ingredientschange = new Subject<Ingredian[]>();
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
    this.ingredientschange.next(this.ingrediants.slice());
  }

  addIngredients(ingredian: Ingredian[]) {
    this.ingrediants.push(...ingredian);
    this.ingredientschange.next(this.ingrediants.slice());
  }
}
