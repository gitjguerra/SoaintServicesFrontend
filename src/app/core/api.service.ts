import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../model/ticket.model';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

// tslint:disable-next-line:member-ordering
const baseUrl = 'http://localhost:8080/api/v1';
let headers: any;
let parametros: any;
let ticket: Ticket;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  create(parametros: Ticket) {      
    return this.http.post(baseUrl + '/cantv/create', parametros, { observe: 'response' });
  }

  select() {
    return this.http.get(baseUrl + '/cantv/select', {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError(error: Response | any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return Observable.throw(errorMessage);
  }

  /*
  getUserById(id: number) {
    return this.http.get(baseUrl + 'user/?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User) {
    return this.http.post(baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  updateUser(user: User) {
    return this.http.put(baseUrl + 'user/' + user.nid + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token'))
    .access_token, user);
  }

  deleteUser(nid: number) {
    return this.http.delete(baseUrl + 'user/' + nid + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token'))
    .access_token);
  }
*/

}
