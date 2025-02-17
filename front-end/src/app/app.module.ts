import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Historywidget } from './Components/dashboard/components/historywidget';
import { StatsWidget } from './Components/dashboard/components/statswidget';
import { ValidationStreamWidget } from './Components/dashboard/components/revenuestreamwidget';
import { NotificationsWidget} from './Components/dashboard/components/notificationswidget';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppComponent } from './app.component';
import { Dashboard} from './Components/dashboard/dashboard';
import {UIChart} from 'primeng/chart';
import {Menu} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, Historywidget , StatsWidget,ValidationStreamWidget,
    Dashboard,NotificationsWidget
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    AppRoutingModule,
    UIChart,
    Menu
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
