import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboradComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import {
  UploadAppointmentsComponent,
} from './upload-appointments/upload-appointments.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboradComponent, children: [
      {
        path: 'home',
        component:HomeComponent,
      },
      {
        path: 'upload-appointments',
        component:UploadAppointmentsComponent,
      },
      {
        path: 'doctor',
        component:DoctorComponent,
      },
      {
        path: 'patient',
        component:PatientComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
