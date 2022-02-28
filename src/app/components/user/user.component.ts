import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() name: string = '';
  @Input() role: string = '';
  @ViewChild('menu') menu: any;
  initial: string = "";
  items: { label: string; items: { label: string; icon: string; command: () => void; }[]; }[];

  constructor() {
    this.items = [{
      label: '',
      items: [{
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        }
      }]
    }]
  }
  
  logout() {
    //console.log('log');
  }

  ngOnInit(): void {
    this.getInitials()
  }

  getInitials() {
    let initials = this.name.split('');
    this.initial = initials[0];
  }

}
