import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  launch_success: boolean;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    company?: string;
    country?: string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  links: {
    mission_patch?: string;
    mission_patch_small?: string;
    article_link?: string;
    wikipedia?: string;
    video_link?: string;
    flickr_images?: string[];
  };
}

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  @Input() set filterYear(year: string) {
    this.currentFilterYear = year?.toString().trim() || '';
    this.filterLaunches();
  }

  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  currentFilterYear: string = '';
  selectedMission: Launch | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.loadLaunches();
  }

  selectMission(mission: Launch): void {
    this.selectedMission = mission;
  }

  clearSelection(): void {
    this.selectedMission = null;
  }

  private loadLaunches() {
    this.http.get<Launch[]>('https://api.spacexdata.com/v3/launches').subscribe({
      next: (data) => {
        this.launches = data.map(launch => ({
          ...launch,
          details: launch.details || 'No details available'
        }));
        this.filteredLaunches = [...this.launches];
        if (this.filteredLaunches.length > 0) {
          this.selectedMission = this.filteredLaunches[0];
        }
      },
      error: (err) => console.error('API Error:', err)
    });
  }

  private filterLaunches() {
    if (!this.currentFilterYear) {
      this.filteredLaunches = [...this.launches];
    } else {
      this.filteredLaunches = this.launches.filter(launch => 
        launch.launch_year === this.currentFilterYear
      );
    }
    
    if (this.selectedMission && !this.filteredLaunches.includes(this.selectedMission)) {
      this.selectedMission = this.filteredLaunches.length > 0 ? this.filteredLaunches[0] : null;
    }
  }
}