import { Component, OnInit } from '@angular/core';
import { ExposerService } from '../exposer.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  videos;
  id;
  constructor(private service: ExposerService) {}

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.service.getVideos().subscribe((data) => (this.videos = data));
  }

  isLoggedIn() {
    return localStorage.getItem('logged');
  }
}
