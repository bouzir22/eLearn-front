import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExposerService } from '../exposer.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
})
export class TutorComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private service: ExposerService
  ) {}
  tutor;
  ngOnInit(): void {
    this.router.snapshot.paramMap.get('id');
    this.service
      .getTutor(this.router.snapshot.paramMap.get('id'))
      .subscribe((data) => (this.tutor = data));
  }
}
