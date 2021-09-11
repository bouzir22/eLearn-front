import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExposerService } from '../exposer.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css'],
})
export class TutorsComponent implements OnInit {
  Videos;

  keyword;
  constructed = [];
  filtred;
  subs;
  subsIds = [];
  current = 1;
  id = '1';
  tutors;

  constructor(
    private service: ExposerService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    //fetch subs
    this.fetchSubs();
    this.fetchTutors();
    this.service.subject.subscribe((data) => this.fetchSubs());
  }
  sub(id) {
    // this.subsIds.push(id);
    this.service.sub(id).subscribe();
  }
  contains(id) {
    return this.subsIds.includes(id);
  }

  unSubscribe(id) {
    for (var i = 0; i < this.subsIds.length; i++) {
      if (this.subsIds[i] === id) {
        this.subsIds.splice(i, 1);
      }
    }
    this.service.unSubscribe(id).subscribe();
  }

  fetchSubs() {
    this.service.getSubs(1).subscribe((data) => {
      this.subs = data;
      console.log(this.subs);
      this.build();
    });
  }

  build() {
    this.subs.forEach((elem) => {
      this.subsIds.push(elem.tutor.id);
      this.subsIds = [...new Set(this.subsIds)];
    });
    console.log(this.subsIds);
  }
  fetchTutors() {
    this.service.getTutors().subscribe((data) => {
      this.tutors = data;
      console.log(this.tutors);
    });
  }
}
