import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Button} from 'primeng/button';
import {LoginComponent} from './Components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WindowMaximizeIcon} from 'primeng/icons';
import {RippleModule} from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http';
import { DepartementsComponent } from './Components/departements/departements.component';



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    DepartementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Button,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    WindowMaximizeIcon,
    ButtonModule, RippleModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara
      }
    })
  ]
})
export class AppModule { }
