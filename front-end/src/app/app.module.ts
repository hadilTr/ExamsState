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
import {DropdownModule} from 'primeng/dropdown';
import { DepartementsComponent } from './Components/departements/departements.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {InputGroup, InputGroupModule} from 'primeng/inputgroup';
import {InputGroupAddon, InputGroupAddonModule} from 'primeng/inputgroupaddon';
import { NiveauGroupeComponent } from './Components/niveau-groupe/niveau-groupe.component';
import {Listbox} from 'primeng/listbox';



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    DepartementsComponent,
    AddUserComponent,
    NiveauGroupeComponent

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
    ButtonModule, RippleModule, DropdownModule, ToastModule, InputGroupAddon, InputGroup, Listbox
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara
      }
    }),
    MessageService
  ]
})
export class AppModule { }
