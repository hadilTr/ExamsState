import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../Services/token.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar // <-- Inject MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');

    if (!token) {
      this.snackBar.open('Please login to access this page', 'OK', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      this.router.navigate(['/login']);
      return false;
    }

    const userRole = TokenService.getRoleFromToken(token);

    if (userRole !== expectedRole) {
      this.snackBar.open(`This section requires ${expectedRole} privileges`, 'OK', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });

      // Redirect to user's appropriate dashboard based on their actual role
      const dashboardRoute = this.getDashboardRoute(userRole);
      this.router.navigate([dashboardRoute]);
      return false;
    }

    return true;
  }

  private getDashboardRoute(role: string): string {
    // Customize these routes based on your application
    const roleRoutes: {[key: string]: string} = {
      'Chef_Dep_info' :'/layout'};
    return roleRoutes[role] || '/layout';
  }
}
