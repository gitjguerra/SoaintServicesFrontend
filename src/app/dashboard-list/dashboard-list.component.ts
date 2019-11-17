import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Ticket } from '../model/ticket.model';
import { Observable,  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  ticketData: any;  
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.sessionStorage.getItem('nphone')) {
      this.router.navigate(['cantv']);
      return;
    }

    this.apiService.select()
      .subscribe( data => {
      console.log(data);
      this.ticketData = data;
    });
    
  }

  /*
  getMovements(user: User): any {
    this.apiService.getMovements()
      .subscribe( data => {
        this.balance = this.balance.filter(u => u !== user);
      });
  }
*/


  /*
  deleteUser(user: User): void {
    this.apiService.deleteUser(+user.nid)
      .subscribe( data => {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.users = this.users.filter(u => u !== user);
      });
  }

  editUser(user: User): void {
    window.sessionStorage.removeItem('editUserId');
    window.sessionStorage.setItem('editUserId', user.nid.toString());
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }
  */
}
