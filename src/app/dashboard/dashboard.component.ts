import {
  Component,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';

import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboradComponent implements OnInit {
  mgl: any = '18rem';
  isOpen: boolean = false;
  innerWidth!: number;
  showHeader: boolean = true;
  constructor(private sidebarService: SidebarService,private router: Router ) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url !== '/dashboard/home') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        };
      }
    })
   }

  ngOnInit(): void {    
    this.sidebarService.closed.subscribe(res => {
    this.isOpen = res;
    if (res) {
      this.mgl = '0rem';
    }
  });
  }

  open() {
    this.sidebarService.opened.emit(true);
    this.mgl = '18rem';
    this.isOpen = !this.isOpen;
  }
}
