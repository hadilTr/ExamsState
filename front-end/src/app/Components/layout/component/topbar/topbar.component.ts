import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../layout.service';
import { addUserService } from '../../../../services/addUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: 'topbar.component.html',
  styleUrl: 'topbar.component.css',
})
export class TopbarComponent {
  items!: MenuItem[];
  profilePictureUrl: string | null = null;
  defaultImageUrl = 'assets/images/user.png';

  constructor(public layoutService: LayoutService,private userService:addUserService,private router:Router) {}

  ngOnInit() {
    this.userService.getProfilePicture().subscribe({
      next: (imageBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        reader.onload = () => {
          this.profilePictureUrl = reader.result as string;
        };
      },
      error: () => {
        this.profilePictureUrl = this.defaultImageUrl;
      }
    });
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }


}
