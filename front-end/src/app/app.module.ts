import { provideHttpClient, withFetch } from '@angular/common/http';
import { TopbarComponent } from './Components/layout/component/topbar/topbar.component';
import { SidebarComponent } from './Components/layout/component/sidebar/sidebar.component';
import { MenuitemComponent } from './Components/layout/component/menuitem/menuitem.component';
import { MenuComponent } from './Components/layout/component/menu/menu.component';
import { FooterComponent } from './Components/layout/component/footer/footer.component';
import Lara from '@primeng/themes/lara';
import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {BadgeModule} from 'primeng/badge';
import {HttpClientModule} from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {WindowMaximizeIcon} from 'primeng/icons';
import {ToastModule} from 'primeng/toast';
import {Listbox} from 'primeng/listbox';
import { AddMatiereComponent } from './Components/add-matiere/add-matiere.component';
import { ListMatieresComponent } from './Components/list-matieres/list-matieres.component';
import {InputGroupAddon, InputGroupAddonModule} from 'primeng/inputgroupaddon';
import { AddEnseignantComponent } from './Components/add-enseignant/add-enseignant.component';
import { FloatingconfiguratorComponent } from './Components/layout/component/floatingconfigurator/floatingconfigurator.component';
import { Button, ButtonDirective, ButtonModule } from 'primeng/button';
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
import { SelectButton } from 'primeng/selectbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ripple, RippleModule } from 'primeng/ripple';
import { InputGroup, InputGroupModule } from 'primeng/inputgroup';
import { AppComponent } from './app.component';
import { ChartInfoComponent } from './Components/pages/Departments/dep-info/chart-info/chart-info.component';
import { Fluid } from 'primeng/fluid';

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
    TopbarwidgetComponent,
    AddEnseignantComponent,
    AddMatiereComponent,
    ListMatieresComponent,
    AddEnseignantComponent,
    AddMatiereComponent,
    ListMatieresComponent,
    ChartInfoComponent

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,

    Button,
    BadgeModule,
    AppRoutingModule,
    TableModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    TableModule,
    Menu,
    UIChart,
    ButtonDirective,
    StyleClass,
    FormsModule,
    SelectButton,
    Ripple,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    BrowserModule,
    HttpClientModule,
    Button,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    WindowMaximizeIcon,
    ButtonModule, RippleModule, DropdownModule, ToastModule, InputGroupAddon, InputGroup, Listbox, Fluid


  ],
  providers: [provideClientHydration(withEventReplay()), // Hydratation pour SSR
    provideHttpClient(withFetch())
  ],// Utilisation de Fetch API pour HttpClient
  bootstrap: [AppComponent],
})
export class AppModule {}
