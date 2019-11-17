import { ApiService } from '../core/api.service';
import { Injectable, Output } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventEmitter } from 'events';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private apiService: ApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
          tap((event: HttpEvent<any>) => {
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
          }, (err: any) => {
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
          })
      );
  }
}
