import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Nauczyć się Angulara'),
    new WishItem('Zdać egzamin semestralny', true),
    new WishItem('Znaleść pracę')
  ];

  filter: any = () => {}
}
