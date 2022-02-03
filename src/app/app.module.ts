import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PatientsComponent } from './patients/patients.component';
import { PaymentsComponent } from './payments/payments.component';
import { HelpComponent } from './help/help.component';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { TopGraficoComponent } from './top-grafico/top-grafico.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AppointmentsComponent,
    DoctorsComponent,
    DepartmentsComponent,
    PatientsComponent,
    PaymentsComponent,
    HelpComponent,
    DashboardComponent,
    MenuComponent,
    HeaderComponent,
    MiniCardComponent,
    BigCardComponent,
    TopGraficoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
