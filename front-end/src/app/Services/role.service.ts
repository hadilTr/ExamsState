import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  getDashboardRoute(role: string): string {
    const roleRoutes: { [key: string]: string } = {
      'Chef_Dep_info': '/dashboard-info',
      'Responsable_etudes': '/layout',

    };

    return roleRoutes[role] || '/layout'; // fallback
  }
}
