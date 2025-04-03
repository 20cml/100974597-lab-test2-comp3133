import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>SpaceX Launch Missions</h1>
      <app-missionfilter (filterChanged)="onFilterChange($event)"></app-missionfilter>
      <app-missionlist [filterYear]="currentFilter"></app-missionlist>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #333;
      text-align: center;
    }
  `]
})
export class AppComponent {
  currentFilter = '';

  onFilterChange(filterValue: string) {
    this.currentFilter = filterValue;
  }
}