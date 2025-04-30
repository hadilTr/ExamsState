import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: false,
  styleUrl: 'app.component.css'
})
export class AppComponent {

  title = 'ExamState';
  showside=false;

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        /*const currentUrl = event.url;
        const isLoginPage = currentUrl.includes('/login');

        if (isLoginPage) {
          this.router.navigate(['/login']);
        }*/

        /*const token = localStorage.getItem('token');
        const userRole = token ? TokenService.getRoleFromToken(token) : null;*/


        this.showside = !(
          event.url.includes('/login') ||
          event.url.includes('/layout') ||
          event.url.includes('/dashboard-info')/*||
          !this.isRoleAllowed(userRole)*/
        );
      }
    });
  }
  private isRoleAllowed(role: string | null): boolean {
    // Define which roles can see the sidebar
    const allowedRoles = ['Responsable_etudes', 'Responsable_examens','Responsable_Deliberation']; // Customize as needed
    return role ? allowedRoles.includes(role) : false;
  }


}
