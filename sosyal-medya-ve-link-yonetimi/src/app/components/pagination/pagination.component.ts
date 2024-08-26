import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 4;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
  increaseItemsPerPage() {
    this.itemsPerPage += 1;
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }
  decreaseItemsPerPage() {
    if (this.itemsPerPage > 1) { // Minimum 1 satır gösterilmeli
      this.itemsPerPage -= 1;
      this.itemsPerPageChange.emit(this.itemsPerPage);
    }
  }
}
