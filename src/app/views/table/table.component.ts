import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() tableTitle: string = "";

  filteredData: any[] = [];
  paginatedData: any[] = [];
  searchText: string = "";
  sortColumn: string = "";
  sortOrder: 'asc' | 'desc' | null = null;
  selectedRows: Set<any> = new Set(); // Seçilen satırlar bir Set içinde tutuluyor

  // Sayfalama için değişkenler
  currentPage: number = 1;
  itemsPerPage: number = 10; // Buradaki değeri 10 yaptık

  constructor() {
    this.filteredData = [...this.data];
    this.updatePagination();
  }

  ngOnChanges() {
    this.filteredData = [...this.data];
    this.applyFilter();
  }

  applyFilter() {
    this.filteredData = this.data.filter((row: { [key: string]: any }) =>
      Object.values(row).some(value =>
        (value as string).toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  sortTable(column: string) {
    if (this.sortColumn === column) {
      if (this.sortOrder === 'asc') {
        this.sortOrder = 'desc';
      } else if (this.sortOrder === 'desc') {
        this.sortOrder = null;
      } else {
        this.sortOrder = 'asc';
      }
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }

    if (this.sortOrder === null) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData.sort((a, b) => {
        let valA = (a[column] as string)?.toString().toLowerCase() || "";
        let valB = (b[column] as string)?.toString().toLowerCase() || "";

        return this.sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      });
    }
    this.updatePagination();
  }

  getSortIconClass(column: string): string {
    if (this.sortColumn === column) {
      if (this.sortOrder === 'asc') return 'fa-solid fa-sort-up';  // Yukarı ok ikonu
      if (this.sortOrder === 'desc') return 'fa-solid fa-sort-down';  // Aşağı ok ikonu
    }
    return 'fa-solid fa-sort';  // Varsayılan yönlü ok ikonu
  }

  // Sayfalama İşlevleri
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedData = this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredData.length) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  getMinValue(value1: number, value2: number): number {
    return Math.min(value1, value2);
  }
  checkbox(e:any){
    console.log(e.id);
  }
}
