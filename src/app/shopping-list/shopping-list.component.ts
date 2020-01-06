import {Component, OnInit} from '@angular/core';
import {Ingredian} from '../shared/ingredian.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingrediants: Ingredian[] = [
    new Ingredian('Apple', 5),
    new Ingredian('Tomato', 7),
    new Ingredian('Mango', 10)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredianAdded(ingredian: Ingredian) {
    this.ingrediants.push(ingredian);
  }
}
