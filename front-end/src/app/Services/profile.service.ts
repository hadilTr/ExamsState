import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  // In a real app, this would call your backend API
  getUser(): Observable<User> {
    // Mock data
    const user: User = {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      mail: "john.doe@example.com",
      role: "USER",
      tel: 1234567890,
      username: "johndoe",
      profilePicture: "/placeholder.svg?height=100&width=100",
    };
    return of(user);
  }

  updateProfilePicture(userId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('profilePicture', file);
    formData.append('userId', userId.toString());

    // In a real app:
    // return this.http.post('/api/profile/update-picture', formData);

    // Mock response
    return of({
      success: true,
      message: "Profile picture updated successfully",
      imageUrl: "/api/images/" + userId
    });
  }
}
