import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginRequest} from '../../models/login-request.model';
import {MessageService} from 'primeng/api';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'login',
  standalone:false,

  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']

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


  showPassword: boolean = false;


  login() {
    this.loading = true;

    const loginRequest:LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(loginRequest).subscribe({
      next: () => {

        this.router.navigate(['dashboard']);

        this.router.navigate(['layout']);

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
