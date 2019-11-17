import { RouterModule } from '@angular/router';
import { CantvComponent } from './cantv/cantv.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
var routes = [
    { path: 'cantv', component: CantvComponent },
    { path: 'dashboard-list', component: DashboardListComponent },
    { path: '', component: CantvComponent }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map