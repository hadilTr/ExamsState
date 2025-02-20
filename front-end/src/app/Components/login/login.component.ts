import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  standalone:false
})
export class LoginComponent {
  nom: string | undefined;
  mdp: string | undefined;

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    if (this.nom && this.mdp) {
      this.loginService.login(this.nom, this.mdp).subscribe({
        next: (response) => {
          console.log('Réponse du serveur :', response);
          // Example: Save token to local storage
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Erreur de connexion :', error);
          alert('Nom d\'utilisateur ou mot de passe incorrect');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
