import { RouterModule, Routes } from '@angular/router';
import {CantvComponent} from './cantv/cantv.component';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';

const routes: Routes = [
  { path: 'cantv', component: CantvComponent },
  { path: 'dashboard-list', component: DashboardListComponent },
  {path : '', component : CantvComponent}
];

export const routing = RouterModule.forRoot(routes);
