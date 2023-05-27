import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIndicationComponent } from './components/cards/card-indication/card-indication.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardPersonDetailComponent } from './components/cards/card-person-detail/card-person-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardIndicationComponent,
    DashboardComponent,
    CardPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
