import { Component } from '@angular/core';


@Component({
  selector: 'login' ,
  templateUrl: './login.component.html',
  standalone: false,

})
export class LoginComponent {
  nom: string | undefined;
  mdp: string|undefined;

}
