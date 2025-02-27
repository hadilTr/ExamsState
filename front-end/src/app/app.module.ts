import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './Components/layout/component/topbar/topbar.component';
import { SidebarComponent } from './Components/layout/component/sidebar/sidebar.component';
import { MenuitemComponent } from './Components/layout/component/menuitem/menuitem.component';
import { MenuComponent } from './Components/layout/component/menu/menu.component';
import { FooterComponent } from './Components/layout/component/footer/footer.component';
import Lara from '@primeng/themes/lara';
import { FloatingconfiguratorComponent } from './Components/layout/component/floatingconfigurator/floatingconfigurator.component';
import { Button, ButtonDirective } from 'primeng/button';
import { ConfiguratorComponent } from './Components/layout/component/configurator/configurator.component';
import { DashboardComponent } from './Components/pages/dashboard/dashboard.component';
import { HistoryWidgetComponent } from './Components/pages/dashboard/components/history-widget/history-widget.component';
import { NotificationsWidgetComponent } from './Components/pages/dashboard/components/notifications-widget/notifications-widget.component';
import { TableModule } from 'primeng/table';
import { Menu } from 'primeng/menu';
import { LayoutComponent} from './Components/layout/component/layout/layout.component'
import { StatsWidgetComponent } from './Components/pages/dashboard/components/stats-widget/stats-widget.component';
import { ValidationStreamWidgetComponent } from './Components/pages/dashboard/components/validation-stream-widget/validation-stream-widget.component';
import { UIChart } from 'primeng/chart';
import { LandingComponent } from './Components/pages/landing/landing.component';
import { FeatureswidgetComponent } from './Components/pages/landing/components/featureswidget/featureswidget.component';
import { FooterwidgetComponent } from './Components/pages/landing/components/footerwidget/footerwidget.component';
import { TopbarwidgetComponent } from './Components/pages/landing/components/topbarwidget/topbarwidget.component';
import { StyleClass } from 'primeng/styleclass';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ripple } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    MenuitemComponent,
    LayoutComponent,
    MenuComponent,
    FooterComponent,
    FloatingconfiguratorComponent,
    ConfiguratorComponent,
    DashboardComponent,
    HistoryWidgetComponent,
    NotificationsWidgetComponent,
    StatsWidgetComponent,
    ValidationStreamWidgetComponent,
    LandingComponent,
    FeatureswidgetComponent,
    FooterwidgetComponent,
    TopbarwidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Button,
    TableModule,
    Menu,
    UIChart,
    ButtonDirective,
    StyleClass,
    FormsModule,
    SelectButton,
    Ripple
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
