var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiService } from '../core/api.service';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor(apiService) {
        this.apiService = apiService;
    }
    ResponseInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                switch (event.body.id) {
                    case '0001':
                        console.log('Usuario no cumple con el formato esperado');
                        //this.apiService.show('Error 0001 - Usuario no cumple con el formato esperado')
                        break;
                    case '0002':
                        console.log('La clave no cumple con el formato esperado');
                        break;
                    case '0003':
                        console.log('La clave anterior no cumple con el formato esperado');
                        break;
                    case '0004':
                        console.log('Cedula de identidad no cumple con el formato esperado');
                        break;
                    case '0005':
                        console.log('Tarjeta no cumple con el formato esperado');
                        break;
                    case '0006':
                        console.log('Email no cumple con el formato esperado');
                        break;
                    case '0007':
                        console.log('Telefono no cumple con el formato esperado');
                        break;
                    case '0008':
                        console.log('Titulo no cumple con el formato esperado');
                        break;
                    case '0009':
                        console.log('Mensaje no cumple con el formato esperado');
                        break;
                    case '0010':
                        console.log('Numero de tarjeta no cumple con el formato esperado');
                        break;
                    case '0011':
                        console.log('Los ultimos digitos de la tarjeta no cumplen con el formato esperado');
                        break;
                    case '0012':
                        console.log('Codigo de validacion cvv no cumplen con el formato esperado');
                        break;
                    case '0013':
                        console.log('La clave no coincide con el registrado por el usuario');
                        break;
                    case '0014':
                        console.log('Pregunta secreta no cumple con el formato esperado');
                        break;
                    case '0015':
                        console.log('Respuesta secreta no cumple con el formato esperado');
                        break;
                    case '0016':
                        console.log('No existe cuenta asociada al usuario enviado');
                        break;
                    case '0017':
                        console.log('No existe cuenta asociada al email enviado');
                        break;
                    case '0018':
                        console.log('Su sesion ha expirado');
                        break;
                    case '0019':
                        console.log('Usuario no encontrado');
                        break;
                    case '0020':
                        console.log('Numero de tarjeta no encontrado');
                        break;
                    case '0021':
                        console.log('Error conectando al banco');
                        break;
                    case '0022':
                        console.log('Error de escritura conectando al banco');
                        break;
                    case '0023':
                        console.log('Usuario no se encuentra registrado como beneficiario');
                        break;
                    case '0024':
                        console.log('Tarjeta no pertenece al usuario');
                        break;
                    case '0025':
                        console.log('No existe usuario con ese numero de documento');
                        break;
                    case '0026':
                        console.log('Beneficiario no existe');
                        break;
                    case '0027':
                        console.log('Error inesperado');
                        break;
                    default:
                        console.log('(' + event.status + '): ' + event.statusText);
                        break;
                }
            }
        }, function (err) {
            if (err instanceof HttpErrorResponse) {
                switch (err.status) {
                    case 401:
                        console.log('No permitido!');
                        break;
                    case 404:
                        console.log('Página no encontrada!');
                        break;
                    default:
                        console.log('Error respuesta (' + err.status + '): ' + err.statusText);
                        break;
                }
            }
        }));
    };
    ResponseInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService])
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());
export { ResponseInterceptor };
//# sourceMappingURL=dashboard-list.interceptor.js.map