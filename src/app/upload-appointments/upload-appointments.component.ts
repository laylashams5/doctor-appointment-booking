import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-upload-appointments',
  templateUrl: './upload-appointments.component.html',
  styleUrls: ['./upload-appointments.component.scss']
})
export class UploadAppointmentsComponent implements OnInit {
  
  loading: boolean = true;
  appointments:any = []
  constructor() { }

  ngOnInit(): void {
    this.appointments = [
      
    {
      ID:1,
      doctorImg:"../../assets/imgs/doctor-thumb-01.jpg",
      doctorName:"Dr. Ruby Perrin",
      speciality:"Dental",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"Charlene Reed",
      appiontmentDate:"9 Nov 2019",
      appointmentTime:"11.00 AM - 11.15 AM",
      status:"Completed",
      amount:"$200.00"
    },
    {
      ID:2,
      doctorImg:"../../assets/imgs/doctor-thumb-01.jpg",
      doctorName:"Dr. Ruby Perrin",
      speciality:"Dental",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"Charlene Reed",
      appiontmentDate:"9 Nov 2019",
      appointmentTime:"11.00 AM - 11.15 AM",
      status:"Completed",
      amount:"$200.00"
    },
    {
      ID:3,
      doctorImg:"../../assets/imgs/doctor-thumb-01.jpg",
      doctorName:"Dr. Ruby Perrin",
      speciality:"Dental",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"Charlene Reed",
      appiontmentDate:"9 Nov 2019",
      appointmentTime:"11.00 AM - 11.15 AM",
      status:"Completed",
      amount:"$200.00"
    },
    {
      ID:4,
      doctorImg:"../../assets/imgs/doctor-thumb-01.jpg",
      doctorName:"Dr. Ruby Perrin",
      speciality:"Dental",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"Charlene Reed",
      appiontmentDate:"9 Nov 2019",
      appointmentTime:"11.00 AM - 11.15 AM",
      status:"Completed",
      amount:"$200.00"
    },
    {
      ID:5,
      doctorImg:"../../assets/imgs/doctor-thumb-01.jpg",
      doctorName:"Dr. Ruby Perrin",
      speciality:"Dental",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"Charlene Reed",
      appiontmentDate:"9 Nov 2019",
      appointmentTime:"11.00 AM - 11.15 AM",
      status:"Completed",
      amount:"$200.00"
    },
  
    ]
    this.loading = false
  }

}
