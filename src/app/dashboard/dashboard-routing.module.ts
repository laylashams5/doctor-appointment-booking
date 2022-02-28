import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboradComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboradComponent,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      { path: 'Appointments', loadChildren: () => import('../upload-appointments/upload-appointments.module').then(m => m.UploadAppointmentsModule) },
      { path: 'Doctors', loadChildren: () => import('../doctor/doctor.module').then(m => m.DoctorModule) },
      { path: 'Patients', loadChildren: () => import('../patient/patient.module').then(m => m.PatientModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
