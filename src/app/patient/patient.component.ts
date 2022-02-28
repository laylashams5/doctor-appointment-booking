import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  loading: boolean = true;
  patients:any = [
    {
      patientId:"#PT001",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"#PT001",
      Age:29,
      gender:"female",
      address:"4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
      phone:"8286329170",
      last_visit:"20 Oct 2019",
      paid:"	$100.00"
    },
    {
      patientId:"#PT002",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"#PT001",
      Age:29,
      gender:"female",
      address:"4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
      phone:"8286329170",
      last_visit:"20 Oct 2019",
      paid:"	$100.00"
    },
    {
      patientId:"#PT003",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"#PT001",
      Age:29,
      gender:"female",
      address:"4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
      phone:"8286329170",
      last_visit:"20 Oct 2019",
      paid:"	$100.00"
    },
    {
      patientId:"#PT004",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"#PT001",
      Age:29,
      gender:"female",
      address:"4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
      phone:"8286329170",
      last_visit:"20 Oct 2019",
      paid:"	$100.00"
    },
    {
      patientId:"#PT005",
      patientImg:"../../assets/imgs/patient1.jpg",
      patientName:"#PT001",
      Age:29,
      gender:"female",
      address:"4417 Goosetown Drive, Taylorsville, North Carolina, 28681",
      phone:"8286329170",
      last_visit:"20 Oct 2019",
      paid:"	$100.00"
    },
  ]
  constructor() { 
    
    this.loading = false
  }

  ngOnInit(): void {
  }

}
