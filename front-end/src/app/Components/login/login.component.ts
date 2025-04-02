import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {LoginRequest} from '../../models/login-request.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  standalone:false
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login() {
    this.loading = true;

    const loginRequest:LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(loginRequest).subscribe({
      next: () => {
        this.router.navigate(['departments']);
        this.messageService.add({
          severity: 'success',
          summary: 'Connexion réussie',
          life: 3000
        });
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error?.message || 'Échec de connexion',
          life: 5000
        });
      },
      complete: () => this.loading = false
    });
  }
}
