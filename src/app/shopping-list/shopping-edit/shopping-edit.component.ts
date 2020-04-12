import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.ingredientAdded.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    })
  }

}
