import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  onSearchTermChange(): void {
    this.searchTermChange.emit(this.searchTerm);
  }
}
