import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginRequest} from '../../models/login-request.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  standalone:false
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (response) => {
          // Store user data (simplified example)
          localStorage.setItem('username', response.username);
          localStorage.setItem('role', response.role);
          this.router.navigate(['/dashboard']); // Redirect after login
        },
        error: (err) => {
          this.errorMessage = 'Invalid username or password'; // Handle Spring Boot's RuntimeException
        },
      });
    }
  }
}
