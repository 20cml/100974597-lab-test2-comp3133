import { Component, Input } from '@angular/core';

interface LaunchDetails {
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
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  @Input() mission: LaunchDetails | null = null;
}