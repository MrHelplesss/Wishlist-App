import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>();
  constructor() { }

  ngOnInit(): void {
  }

  newWishText = '';
  
  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';
  }
}
