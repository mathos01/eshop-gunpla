// search-form.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [FormsModule], // ← Obligatoire pour ngModel
  templateUrl: './search-form.html',
  styleUrls: ['./search-form.scss']
})
export class SearchForm {
  searchTerm = '';
  description = '';
  category = '';
}
