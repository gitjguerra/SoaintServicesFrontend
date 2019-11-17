var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// tslint:disable-next-line:member-ordering
var baseUrl = 'http://localhost:8080/api/v1';
var headers;
var parametros;
var ticket;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.create = function (parametros) {
        //const phone = window.sessionStorage.getItem('nphone');
        //const mobile = window.sessionStorage.getItem('mobile');
        //const mail = window.sessionStorage.getItem('mail');
        return this.http.post(baseUrl + '/cantv/create', parametros);
    };
    ApiService.prototype.select = function () {
        //const phone = window.sessionStorage.getItem('nphone');
        //const mobile = window.sessionStorage.getItem('mobile');
        //const mail = window.sessionStorage.getItem('mail');
        return this.http.get(baseUrl + '/cantv/select');
    };
    ApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Observable.throw(errorMessage);
    };
    ApiService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map