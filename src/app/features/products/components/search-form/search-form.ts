// search-form.ts
import {Component, output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {category} from '../../models/product.model';

@Component({
  selector: 'app-search-form',
  imports: [FormsModule], // ← Obligatoire pour ngModel
  templateUrl: './search-form.html',
  styleUrls: ['./search-form.scss']
})
export class SearchForm {
  category = signal('');
  research = output<category>();

  SearchCategory(){
    this.research.emit(<category>this.category());
  }
  reset(){
    this.category.set("");
    this.research.emit(<category>this.category());
  }
}
