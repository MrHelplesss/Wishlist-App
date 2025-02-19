import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'wish-list',
  imports: [NgFor, NgIf],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes : WishItem[] =[];

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
