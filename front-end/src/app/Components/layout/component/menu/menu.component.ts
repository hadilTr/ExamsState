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
      {
        label: '👨‍🏫 ENSEIGNANTS',
        items: [
          {
            label: ' Ajouter des Enseignants',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/add-enseignant'],
          }
        ],
      },
      {
        label: '',
        items: [
          {
            label: 'Liste des Enseignants',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/list-enseignants'],
          }
        ],
      },

      {
        label: '📚 MATIERES',
        items: [
          {
            label: ' Ajouter Les Matieres',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/add-matiere'],
          }
        ],
      },


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





}
