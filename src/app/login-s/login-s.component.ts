import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-login-s',
  templateUrl: './login-s.component.html',
  styleUrls: ['./login-s.component.css'],
})
export class LoginSComponent implements OnInit {
  coor = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: AccessService, private router: Router) {}
  current;
  id = 0;

  ngOnInit(): void {}

  tryLogin() {
    let { username, password } = this.coor.value;
    console.log(password);

    this.service.getUser(username).subscribe((data) => {
      this.current = data;
      if (this.current.password == password) this.onSucces();
    });
  }

  onSucces() {
    localStorage.setItem('id', this.current.id);
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/acceuil']);
  }
}
