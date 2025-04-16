import { Component, model } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/layout'] },
        ],
      },
      /*{
        label: 'Subjects',
        items: [
          {
            label: 'Add Subject',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/add-matiere'],
          }
        ],
      },*/
      {
        label: 'Teachers',
        items: [
          {
            label: 'Add Teacher',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/add-enseignant'],
          }
        ],
      },
      {
        label: 'Matrix',
        items: [
          {
            label: 'Matrix Consultation',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/list-matiere'],
          }
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Consulter profile',
            icon: 'pi pi-user',
            routerLink: ['/profile'],
          }
        ],
      },
      {
        label: 'Departments',
        items: [
          {
            label: 'Info',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/lchartinfo'],
          }
        ],
      },

      ];
  }





}
