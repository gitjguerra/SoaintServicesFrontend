var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Ticket } from '../model/ticket.model';
var DashboardListComponent = /** @class */ (function () {
    function DashboardListComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.ticketData = new Ticket();
        this.ticket = {
            id: null,
            numero_telefono: null,
            numero_movil: null,
            correo: null,
            json_ticket: null,
            numero_ticket_sacas: null,
            estatus: null
        };
    }
    DashboardListComponent.prototype.ngOnInit = function () {
        if (!window.sessionStorage.getItem('nphone')) {
            this.router.navigate(['cantv']);
            return;
        }
        this.ticketData.id = window.sessionStorage.getItem('id');
        this.ticketData.numero_telefono = window.sessionStorage.getItem('nphone');
        this.ticketData.numero_movil = window.sessionStorage.getItem('nmobile');
        this.ticketData.correo = window.sessionStorage.getItem('mail');
        this.ticketData.json_ticket = window.sessionStorage.getItem('json_ticket');
        this.ticketData.estatus = window.sessionStorage.getItem('estatus');
        this.apiService.select()
            .subscribe(function (data) {
            console.log(data);
            //this.ticket = data;
        });
    };
    DashboardListComponent.prototype.select = function () {
        var _this = this;
        this.apiService.select()
            .subscribe(function (data) { return _this.useData(data); }, function (err) { return console.error(err); });
    };
    DashboardListComponent.prototype.useData = function (data) {
        if (data.id > 0) {
            console.log('Hay error');
        }
        else {
            this.ticket = data;
            console.log('No hay error');
        }
    };
    DashboardListComponent = __decorate([
        Component({
            selector: 'app-dashboard-list',
            templateUrl: './dashboard-list.component.html',
            styleUrls: ['./dashboard-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, ApiService])
    ], DashboardListComponent);
    return DashboardListComponent;
}());
export { DashboardListComponent };
//# sourceMappingURL=dashboard-list.component.js.map