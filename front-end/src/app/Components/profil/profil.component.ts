import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { ProfileService } from '../../Services/profile.service';



@Component({
  selector: 'app-profil',
  standalone: false,
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error('Error loading profile:', err)
    });
  }
}
