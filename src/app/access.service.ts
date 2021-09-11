import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  constructor(private http: HttpClient) {}

  getUser(username) {
    return this.http.get(
      `http://localhost:8080/student/findByUsername/${username}`
    );
  }
  register(stdnt) {
    return this.http.post(`http://localhost:8080/student/register`, stdnt);
  }
  getById(id) {
    return this.http.get(`http://localhost:8080/student/${id}`);
  }
}
