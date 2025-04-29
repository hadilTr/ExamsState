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

  constructor(private router:Router) {
    this.router.events.subscribe((event)=>{
      if ( event instanceof NavigationEnd)
      {this.showside=!event.url.includes('/login');

        //this.showside=!event.url.includes('/layout');

      }
    })


  }

}
