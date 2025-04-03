import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  template: `
    <div class="filter-container">
      <input
        [(ngModel)]="yearFilter"
        (keyup.enter)="applyFilter()"
        placeholder="Filter by launch year (e.g. 2018)"
        type="number"
      >
      <button (click)="applyFilter()">Filter</button>
      <button (click)="clearFilter()">Clear</button>
    </div>
  `,
  styles: [`
    .filter-container {
      display: flex;
      gap: 10px;
      margin: 20px 0;
      justify-content: center;
    }
    input {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 200px;
    }
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:first-of-type {
      background: #1976d2;
      color: white;
    }
    button:last-of-type {
      background: #f5f5f5;
    }
  `]
})
export class MissionfilterComponent {
  yearFilter = '';
  @Output() filterChanged = new EventEmitter<string>();

  applyFilter() {
    this.filterChanged.emit(this.yearFilter);
  }

  clearFilter() {
    this.yearFilter = '';
    this.filterChanged.emit('');
  }
}