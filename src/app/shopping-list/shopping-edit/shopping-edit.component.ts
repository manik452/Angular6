import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredian} from '../../shared/ingredian.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) ingNameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) ingAmountRef: ElementRef;
  @Output() ingredianModel = new EventEmitter<Ingredian>();

  constructor() {
  }

  ngOnInit() {
  }

  addIngredian() {

    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmount = this.ingAmountRef.nativeElement.value;
    const newIngredian = new Ingredian(ingName, ingAmount);
    this.ingredianModel.emit(newIngredian);
  }

}
