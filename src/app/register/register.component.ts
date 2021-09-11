import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private service: AccessService, private router: Router) {}
  current;
  form = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  register() {
    console.log('submitted');
    this.service.register(this.form.value).subscribe((data) => {
      this.current = data;
      localStorage.setItem('id', this.current.id);

      localStorage.setItem('logged', 'true');
      this.router.navigate(['/acceuil']);
    });
  }

  isLoggedIn() {
    return localStorage.getItem('logged');
  }
}
