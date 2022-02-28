import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { UserComponent } from '../components/user/user.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboradComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboradComponent,
    SidebarComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    AutoCompleteModule,
    FormsModule,
  ]
})
export class DashboardModule { }
