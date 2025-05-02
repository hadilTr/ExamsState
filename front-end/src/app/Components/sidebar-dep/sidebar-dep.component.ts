import { Component, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-dep',
  standalone: false,
  templateUrl: './sidebar-dep.component.html',
  styleUrl: './sidebar-dep.component.scss'
})
export class SidebarDepComponent {
  model: MenuItem[] = [];
  constructor(private router: Router) {}
  ngOnInit() {

    this.model = [





      {
        label: ' 🖥️ MATRICES',
        items: [
          {
            label: 'Consultation des Matrices',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/list-matiere'],
          }
        ],
      },

      {
        label: '👥 Profile',
        items: [
          {
            label: 'Consulter profile',
            icon: 'pi pi-user',
            routerLink: ['/profile'],
          }
        ],
      },





    ];

  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }


}
