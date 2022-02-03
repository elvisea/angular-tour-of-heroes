import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HelpComponent } from './help/help.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PatientsComponent } from './patients/patients.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'departaments', component: DepartmentsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'payments', component: PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
