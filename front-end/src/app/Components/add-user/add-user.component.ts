/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AddUserRequest} from '../../models/AddUser-request.model';
import {addUserService } from '../../services/addUser.service';
import { FormGroup } from '@angular/forms';

export enum Role {
  Responsable_etudes = 'Responsable_etudes',
  Chef_Dep_info = 'Chef_Dep_info',
  Chef_Dep_electrique = 'Chef_Dep_electrique',
  Responsable_examens = 'Responsable_examens',
  Responsable_Deliberation = 'Responsable_Deliberation'
}

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: 'add-user.component.html',
  styleUrl: 'add-user.component.css'
})
export class AddUserComponent {
  firstname: string = '';
  lastname: string = '';
  mail: string = '';
  password: string = '';
  tel: string = '';
  username: string = '';

  role: Role | null = null; // Currently selected role
  roles: any[] = [];


  constructor(
    private addUserService:  addUserService,
    private router: Router,)
  {
    // Convert enum to array of objects for dropdown
    this.roles = Object.keys(Role).map(key => ({
      name: this.formatRoleName(key),
      value: Role[key as keyof typeof Role]
    }));

  }

  private formatRoleName(roleKey: string): string {
    return roleKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  addnewuser() {

    const adduserRequest: AddUserRequest = {
      firstname: this.firstname,
      lastname: this.lastname,
      mail: this.mail,
      password: this.password,
      tel: this.tel,
      username: this.username,
      role: this.role
    }
    this.addUserService.adduser(adduserRequest).subscribe({
      next: (response) => {
        console.log('User added successfully:', response);

      },
      error: (err) => {
        console.error('Error adding user:', err);
        // Show error message to user
      }
    });
  }
  showNotification = false;
  notificationMessage = '';
  userForm: FormGroup;
  onSubmit() {
    if (this.userForm.valid) {
      this.addUserService.adduser(this.userForm.value).subscribe({
        next: (response) => {
          this.notificationMessage = 'Enseignant enregistré avec succès !';
          this.showNotification = true;

          setTimeout(() => {
            this.showNotification = false;
            this.router.navigate(['/login']);
          }, 3000);
        },
        error: (err) => {
          this.notificationMessage = 'Erreur lors de l\'enregistrement: ' +
            (err.error?.message || 'Veuillez réessayer');
          this.showNotification = true;

          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
        }
      });
    }
  }
}*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserRequest } from '../../models/AddUser-request.model';
import { addUserService } from '../../services/addUser.service';

export enum Role {
  Responsable_etudes = 'Responsable_etudes',
  Chef_Dep_info = 'Chef_Dep_info',
  Chef_Dep_electrique = 'Chef_Dep_electrique',
  Responsable_examens = 'Responsable_examens',
  Responsable_Deliberation = 'Responsable_Deliberation'
}

@Component({
  selector: 'app-add-user',
  standalone:false,
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.component.css']
})
export class AddUserComponent {
  firstname: string = '';
  lastname: string = '';
  mail: string = '';
  password: string = '';
  tel: string = '';
  username: string = '';
  role: Role | null = null;
  roles: any[] = [];

  isLoading = false;
  showNotification = false;
  notificationIsError = false;
  notificationMessage = '';

  constructor(
    private addUserService: addUserService,
    private router: Router
  ) {
    this.roles = Object.keys(Role).map(key => ({
      name: this.formatRoleName(key),
      value: Role[key as keyof typeof Role]
    }));
  }

  private formatRoleName(roleKey: string): string {
    return roleKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  addnewuser() {
    if (!this.firstname || !this.lastname || !this.mail || !this.password || !this.username || !this.role) {
      this.showNotificationMessage('Veuillez remplir tous les champs obligatoires', true);
      return;
    }

    this.isLoading = true;

    const adduserRequest: AddUserRequest = {
      firstname: this.firstname,
      lastname: this.lastname,
      mail: this.mail,
      password: this.password,
      tel: this.tel,
      username: this.username,
      role: this.role
    };

    this.addUserService.adduser(adduserRequest).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.showNotificationMessage('Utilisateur ajouté avec succès!', false);
        setTimeout(() => {
          this.router.navigate(['/users']); // Rediriger vers la liste des utilisateurs
        }, 2000);
      },
      error: (err) => {
        this.isLoading = false;
        const errorMsg = err.error?.message || 'Erreur lors de l\'ajout de l\'utilisateur';
        this.showNotificationMessage(errorMsg, true);
      }
    });
  }

  private showNotificationMessage(message: string, isError: boolean) {
    this.notificationMessage = message;
    this.notificationIsError = isError;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
