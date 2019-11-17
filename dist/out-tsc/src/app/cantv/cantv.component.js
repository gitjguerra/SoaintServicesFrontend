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
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Ticket } from '../model/ticket.model';
var CantvComponent = /** @class */ (function () {
    function CantvComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
        this.ticketData = new Ticket();
        this.invalidForm = false;
    }
    CantvComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.cantvForm.invalid) {
            return;
        }
        var parametros = {
            nphone: this.cantvForm.controls.nphone.value,
            nmobile: this.cantvForm.controls.nmobile.value,
            mail: this.cantvForm.controls.mail.value,
        };
        this.apiService.create(parametros).subscribe(function (data) {
            window.sessionStorage.setItem('nphone', JSON.stringify(data['nphone']));
            window.sessionStorage.setItem('nmobile', JSON.stringify(data['nmobile']));
            window.sessionStorage.setItem('mail', JSON.stringify(data['mail']));
            _this.router.navigate(['dashboard-list']);
        }, function (error) {
            alert(error.error.error_description);
        });
    };
    CantvComponent.prototype.ngOnInit = function () {
        this.cantvForm = this.formBuilder.group({
            nphone: ['', Validators.compose([Validators.required])],
            nmobile: ['', Validators.required],
            mail: ['', Validators.required]
        });
    };
    CantvComponent = __decorate([
        Component({
            selector: 'app-cantv',
            templateUrl: './cantv.component.html',
            styleUrls: ['./cantv.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, Router, ApiService])
    ], CantvComponent);
    return CantvComponent;
}());
export { CantvComponent };
//# sourceMappingURL=cantv.component.js.map