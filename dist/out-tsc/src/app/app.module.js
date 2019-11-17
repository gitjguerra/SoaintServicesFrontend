var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CantvComponent } from './cantv/cantv.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { ApiService } from './core/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ResponseInterceptor } from './interceptors/dashboard-list.interceptor';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                CantvComponent,
                DashboardListComponent
            ],
            imports: [
                BrowserModule,
                routing,
                ReactiveFormsModule,
                HttpClientModule,
                FormsModule
            ],
            providers: [{
                    provide: HTTP_INTERCEPTORS,
                    useClass: ResponseInterceptor,
                    multi: true
                },
                ApiService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map