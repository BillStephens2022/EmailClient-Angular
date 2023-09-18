import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, SigninCredentials } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const username = this.authForm.get('username')!.value;
    const password = this.authForm.get('password')!.value;

    if (username !== null && password !== null) {
      const credentials: SigninCredentials = {
        username: username,
        password: password,
      };
      this.authService.signin(credentials).subscribe({
        next: () => {
          this.router.navigateByUrl('/inbox');
        },
        error: ({ error }) => {
          if (error.username || error.password) {
            this.authForm.setErrors({ credentials: true });
          }
        },
      });
    }
  }
}
