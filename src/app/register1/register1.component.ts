import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css'],
})
export class Register1Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  current;

  constructor(
    private formBuilder: FormBuilder,
    private service: AccessService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],

      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

    this.service
      .getById(localStorage.getItem('id'))
      .subscribe((data) => (this.current = data));
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    let updated = this.registerForm.value;
    updated.id = this.current.id;
    updated.username = this.current.username;
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    // display form values on success
    this.service.register(updated).subscribe((data) => {
      this.current = data;
      localStorage.setItem('id', this.current.id);
      this.router.navigate(['/profile']);
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
