import {
  Component,
  OnInit,
} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  display: boolean = true;
  items!: MenuItem[];

  constructor(private sideBarService: SidebarService) { }

  ngOnInit(): void {
    this.sideBarService.opened.subscribe(res => {
      this.display = res;
    });

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-pw pi-home',
        routerLink: ['/dashboard/home']
      },
      {
        label: 'Appointments',
        icon: 'pi pi-list',
        routerLink: ['/dashboard/upload-appointments'],
      },
      {
        label: 'Doctors',
        icon: 'pi pi-id-card',
        routerLink: ['/dashboard/doctor'],
      },
      {
        label: 'Patients',
        icon: 'pi pi-user',
        routerLink: ['/dashboard/patient'],
      },
    ];
  }

  hide() {
    this.sideBarService.closed.emit(true);
  }

  show() {
    this.sideBarService.closed.emit(false);
  }

}
