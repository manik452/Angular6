import {Component, EventEmitter, OnInit} from '@angular/core';
import {Ingredian} from '../shared/ingredian.model';
import {ShoppingService} from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  // private ingredientsChange = new EventEmitter<Ingredian>();
  ingrediants: Ingredian[];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngredian();
    this.shoppingService.ingredientschange
      .subscribe(
        (ingredians: Ingredian[]) => {
          this.ingrediants = ingredians;
        }
      );
  }

  onIngredianAdded(ingredian: Ingredian) {
    this.ingrediants.push(ingredian);
  }
}
