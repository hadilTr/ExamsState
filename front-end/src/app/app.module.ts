import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {HttpClientModule} from '@angular/common/http';

import { AddEnseignantComponent } from './Components/add-enseignant/add-enseignant.component';
import {InputGroupAddon, InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputGroup, InputGroupModule} from 'primeng/inputgroup';
import {Button, ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {WindowMaximizeIcon} from 'primeng/icons';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {Listbox} from 'primeng/listbox';


@NgModule({
  declarations: [
    AppComponent,
    AddEnseignantComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    TableModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
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
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
