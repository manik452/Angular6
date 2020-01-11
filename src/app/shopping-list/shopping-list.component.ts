import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Ingredian} from '../shared/ingredian.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // private ingredientsChange = new EventEmitter<Ingredian>();
  ingrediants: Ingredian[];
  private subscription: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngredian();
    this.subscription = this.shoppingService.ingredientschange
      .subscribe(
        (ingredians: Ingredian[]) => {
          this.ingrediants = ingredians;
        }
      );
  }

  onIngredianAdded(ingredian: Ingredian) {
    this.ingrediants.push(ingredian);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
