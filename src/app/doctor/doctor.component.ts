import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  loading: boolean = true;
  doctors:any =[
    {
      doctorId:1,
      doctorName:"Dr. Darren Elder",
      doctorImg:"../../assets/imgs/doctor-thumb-02.jpg",
      speciality:"Dental",
      earned:"$5000.00",
    },
    {
      doctorId:2,
      doctorName:"Dr. Darren Elder",
      doctorImg:"../../assets/imgs/doctor-thumb-02.jpg",
      speciality:"Dental",
      earned:"$5000.00",
    },
    {
      doctorId:3,
      doctorName:"Dr. Darren Elder",
      doctorImg:"../../assets/imgs/doctor-thumb-02.jpg",
      speciality:"Dental",
      earned:"$5000.00",
    },
    {
      doctorId:4,
      doctorName:"Dr. Darren Elder",
      doctorImg:"../../assets/imgs/doctor-thumb-02.jpg",
      speciality:"Dental",
      earned:"$5000.00",
    },
    {
      doctorId:5,
      doctorName:"Dr. Darren Elder",
      doctorImg:"../../assets/imgs/doctor-thumb-02.jpg",
      speciality:"Dental",
      earned:"$5000.00",
    },
  ]
  constructor() {
    
    this.loading = false
   }

  ngOnInit(): void {
  }

}
