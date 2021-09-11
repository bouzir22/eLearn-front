import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExposerService {
  constructor(private http: HttpClient) {}

  getVido(id) {
    return this.http.get(`http://localhost:8080/video/byid/${id}`);
  }
  getPlayList(name) {
    return this.http.get(`http://localhost:8080/video/playlist/${name}`);
  }
  getVideos() {
    return this.http.get('http://localhost:8080/allvideos');
  }

  getTutors() {
    return this.http.get('http://localhost:8080/tutor/all');
  }

  sub(id) {
    let cid = localStorage.getItem('id');
    console.log(cid);
    return this.http
      .get(`http://localhost:8080/subscribe/${cid}/${id}`)
      .pipe(tap(() => this.subject.next()));
  }
  getStudent(id) {
    return this.http.get(`http://localhost:8080/student/${id}`);
  }
  getSubs(id) {
    return this.http.get(`http://localhost:8080/student/subs/${id}`);
  }
  unSubscribe(idt) {
    let cid = localStorage.getItem('id');
    return this.http
      .get(`http://localhost:8080/delete/${idt}/${cid}`)
      .pipe(tap(() => this.subject.next()));
  }

  private _subject = new Subject<void>();

  get subject() {
    return this._subject;
  }

  getTutor(id) {
    return this.http.get(`http://localhost:8080/tutor/byId/${id}`);
  }
}
