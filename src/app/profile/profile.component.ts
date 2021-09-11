import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExposerService } from '../exposer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private service: ExposerService, private router: Router) {}
  student;

  ngOnInit(): void {
    this.service
      .getStudent(localStorage.getItem('id'))
      .subscribe((data) => (this.student = data));
  }
  edit() {
    this.router.navigate(['/edit']);
  }
}
