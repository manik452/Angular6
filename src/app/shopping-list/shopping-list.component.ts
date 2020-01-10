import {Component, OnInit} from '@angular/core';
import {Ingredian} from '../shared/ingredian.model';
import {ShoppingService} from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  ingrediants: Ingredian[];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngredian();
  }

  onIngredianAdded(ingredian: Ingredian) {
    this.ingrediants.push(ingredian);
  }
}
