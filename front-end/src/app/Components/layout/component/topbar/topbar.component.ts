import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: 'topbar.component.html',
  styleUrl: 'topbar.component.css',
})
export class TopbarComponent {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

}
