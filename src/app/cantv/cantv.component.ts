import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';
import {HttpParams} from '@angular/common/http';
import {Ticket} from '../model/ticket.model';

@Component({
  selector: 'app-cantv',
  templateUrl: './cantv.component.html',
  styleUrls: ['./cantv.component.css']
})
export class CantvComponent implements OnInit {

  ticketData: Ticket = new Ticket();
  cantvForm: FormGroup;
  invalidForm = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.cantvForm.invalid) {
      return;
    }

    const parametros = new Ticket();
    parametros.numero_telefono = this.cantvForm.controls.nphone.value;
    parametros.numero_movil = this.cantvForm.controls.nmobile.value;
    parametros.correo = this.cantvForm.controls.mail.value;

    this.apiService.create(parametros).subscribe(data => {

      window.sessionStorage.setItem('nphone', JSON.stringify(data['nphone']));
      window.sessionStorage.setItem('nmobile', JSON.stringify(data['nmobile']));
      window.sessionStorage.setItem('mail', JSON.stringify(data['mail']));

      this.router.navigate(['dashboard-list']);

    }, error => {
        alert(error.error.error_description);
    });
  }

  ngOnInit() {
    this.cantvForm = this.formBuilder.group({
      nphone: ['', Validators.compose([Validators.required])],
      nmobile: ['', Validators.required],
      mail: ['', Validators.required]
    });
  }



}
