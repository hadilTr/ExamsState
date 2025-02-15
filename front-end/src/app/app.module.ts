import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatricesComponent } from './Components/matrices/matrices.component';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MatricesComponent,
    BadgeModule,
    MatricesComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
