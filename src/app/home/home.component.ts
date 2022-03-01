import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  doctor:any = {
    name:"Dr. Darren Elder",
    speciality:"Oral & Maxillofacial Surgery",
    image:"../../assets/imgs/doctor-thumb-02.jpg"
  }
  showAppointment:boolean=true;
  waitingAppointments :any  =[
    {
      patientId:"#PT001",
      patientName:"Charlene Reed",
      patientImg:"../../assets/imgs/patient1.jpg",
      appointmentDate:"14 Nov 2019",
      appointmentTime:"10.00 AM",
      patientAddress:"Newyork, United States",
      patientEmail:"charlenereed@example.com",
      patientPhone:"+1 828 632 9170",
    },
    {
      patientId:"#PT002",
      patientName:"Charlene Reed",
      patientImg:"../../assets/imgs/patient1.jpg",
      appointmentDate:"14 Nov 2019",
      appointmentTime:"10.00 AM",
      patientAddress:"Newyork, United States",
      patientEmail:"charlenereed@example.com",
      patientPhone:"+1 828 632 9170",
    },
    {
      patientId:"#PT003",
      patientName:"Charlene Reed",
      patientImg:"../../assets/imgs/patient1.jpg",
      appointmentDate:"14 Nov 2019",
      appointmentTime:"10.00 AM",
      patientAddress:"Newyork, United States",
      patientEmail:"charlenereed@example.com",
      patientPhone:"+1 828 632 9170",
    },
    {
      patientId:"#PT004",
      patientName:"Charlene Reed",
      patientImg:"../../assets/imgs/patient1.jpg",
      appointmentDate:"14 Nov 2019",
      appointmentTime:"10.00 AM",
      patientAddress:"Newyork, United States",
      patientEmail:"charlenereed@example.com",
      patientPhone:"+1 828 632 9170",
    },
    {
      patientId:"#PT005",
      patientName:"Charlene Reed",
      patientImg:"../../assets/imgs/patient1.jpg",
      appointmentDate:"14 Nov 2019",
      appointmentTime:"10.00 AM",
      patientAddress:"Newyork, United States",
      patientEmail:"charlenereed@example.com",
      patientPhone:"+1 828 632 9170",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  showAppoientment() {
    this.showAppointment = !this.showAppointment
  }

}
