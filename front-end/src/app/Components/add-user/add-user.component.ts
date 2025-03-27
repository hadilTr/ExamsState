import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AddUserRequest} from '../../models/AddUser-request.model';
import {addUserService } from '../../services/addUser.service';

export enum Role {
  Responsable_etudes = 'Responsable_etudes',
  Ched_Dep_info = 'Ched_Dep_info',
  Ched_Dep_electrique = 'Ched_Dep_electrique',
  Responsable_examens = 'Responsable_examens',
  Responsable_Deliberation = 'Responsable_Deliberation'
}

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  firstname: string = '';
  lastname: string = '';
  mail: string = '';
  Password: string = '';
  tel: string = '';
  Username: string = '';

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
      Password: this.Password,
      tel: this.tel,
      Username: this.Username,
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


}
