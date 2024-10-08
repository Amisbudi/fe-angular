(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-registration-payment-registration-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "dtOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], DataTableDirective.prototype, "dtTrigger", void 0);
    DataTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DataTableDirective);
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
    DataTablesModule = DataTablesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/payment-registration/payment-registration.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/payment-registration/payment-registration.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div autoscroll=\"true\" class=\"page-block\" style=\"overflow-y: auto; height: 100%;\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'CONTENT.form_payment'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <!-- <div padding  class=\"col-md-12\"> -->\n    <!-- <app-card hidHeader=\"false\"> -->\n      <div class=\"row\" >\n        <div padding class=\"col-md-12\">\n          <app-card  cardTitle=\"{{'CONTENT.form_payment' | translate}}\" headerClass=\"text-center text-md-left\" [options]=\"false\" [loading]=\"loading\">\n            <div class=\"app-body\">\n              <!-- <br> -->\n              <form  [formGroup]=\"registrationDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n                <div class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" readonly name=\"order_number\" formControlName=\"registration_number\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.program' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" readonly name=\"name\" formControlName=\"program\">\n                  <!-- <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</label> -->\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" readonly name=\"name\" formControlName=\"selection_path\">\n                  <!-- <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</label> -->\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pin-price' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" readonly name=\"registration_fee\" formControlName=\"registration_fee\">\n                  <!-- <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</label> -->\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.payment-method' | translate }}</label>\n                  <ng-select class=\"index-up\" name=\"payment-method\"  [allowClear]=\"false\" formControlName=\"payment_method\" [placeholder]=\"'CONTENT.payment-method' | translate\" [ngClass]=\"'custom bg-white'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"paymentMethod\" (deselected)=\"onDeselected('paymentMethod')\"  [options]=\"listPaymentMethod\"></ng-select>\n                  <div *ngIf=\"!paymentMethod\" class=\"invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</div>\n                  <!-- <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</label> -->\n                </div>\n                <p style=\"color:blue\" (click)=\"modalPaymentMethodDetail.show();\"><em>{{ 'CONTENT.sentence_payment' | translate }}</em></p>\n                <!-- <br> -->\n                <div class=\"div-merah1 col-12 col-md-12\">\n                  <!-- <div class=\"row\">\n                    <div class=\"col-sm-2\"></div>\n                    <div class=\"col-sm-8\"> -->\n                      <div class=\"form-group form-check\">\n                        <input class=\"form-check-input ml-2\" type=\"checkbox\" [(ngModel)]=\"checklist\"\n                          [ngModelOptions]=\"{standalone: true}\" name=\"checklist\">\n                        <h6 class=\"text-light text-setting ml-3 pt-3\">{{ 'CONTENT.sentence_tac_newreg' | translate }}</h6>\n                        <div *ngIf=\"!checklist\" class=\"invalid-feedback\">Mohon diceklis</div>\n\n                      </div>\n                    <!-- </div>\n                    <div class=\"col-sm-2\"></div> -->\n                  <!-- </div> -->\n                </div>\n                <br>\n                <div class=\"form-group mb-0 mt-4 text-right\">\n                  <div class=\"btn-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"modalOrderForm.show();createPaymentRegistrationData();\" [disabled]=\"registrationDataForm.invalid || !paymentMethod || !checklist\">\n                      {{ isPaymentMethodNotNull === false ? ('CONTENT.order_form_request' | translate ) : ('CONTENT.update_form_request' | translate ) }}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </app-card>\n        </div>\n      </div>\n    <!-- </app-card> -->\n  <!-- </div> -->\n</div>\n\n<app-ui-modal #modalOrderForm [dialogClass]=\"'modal-lg btn-page'\" [containerClick]=\"false\">\n  <div class=\"app-modal-header\">\n    <h5 style=\"text-align:center\">{{ 'CONTENT.info' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalOrderForm.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registrationDataForm\">\n      <h6 style=\"text-align:center\">{{ 'CONTENT.sentence_form_order' | translate }}</h6>\n      <div class=\"form-group row\">\n        <label for=\"fullname\" class=\"col-sm-4 col-form-label\">{{'CONTENT.fullname' | translate}} : </label>\n        <div class=\"col-sm-8\">\n          <input type=\"fullname\" class=\"form-control\" id=\"fullname\" formControlName=\"fullname\" readonly>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"NIK\" class=\"col-sm-4 col-form-label\">{{'CONTENT.NIK' | translate}} : </label>\n        <div class=\"col-sm-8\">\n          <input type=\"NIK\" class=\"form-control\" id=\"NIK\" formControlName=\"NIK\" readonly>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"registration-number\" class=\"col-sm-4 col-form-label\"><b>{{'CONTENT.registration-number' | translate}} : </b></label>\n        <div class=\"col-sm-8\">\n          <input type=\"NIK\" class=\"form-control\" id=\"NIK\" readonly formControlName=\"registration_number\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"payment-method\" class=\"col-sm-4 col-form-label\"><b>{{'CONTENT.payment-method' | translate}} : </b></label>\n        <div class=\"col-sm-8\">\n          <input type=\"payment-method\" class=\"form-control\" id=\"payment-method\" formControlName=\"payment_method\" readonly>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"registration-fee\" class=\"col-sm-4 col-form-label\"><b>{{'CONTENT.registration-fee' | translate}} : </b></label>\n        <div class=\"col-sm-8\">\n          <input type=\"pregistration-fee\" class=\"form-control\" id=\"registration-fee\" formControlName=\"registration_fee\" readonly>\n        </div>\n      </div>\n      <h6 style=\"text-align:center\">{{ 'CONTENT.sentence_form_order' | translate }}</h6>\n      <div class = \"row\">\n        <div class=\"col-sm-12 text-center\">\n          <div class=\"btn-group\">\n            <a class=\"btn btn-primary m-t-20 m-b-20 m-l-10\" routerLink=\"/registration-history\"  href=\"javascript:\">{{ 'ROOT.ok' | translate }}</a>\n            <!-- <button class=\"btn btn-primary m-t-20 m-b-20 m-l-10   js-programmatic-enable\" (click)=\"goToRegistrationHistory()\">{{ 'ROOT.ok' | translate }}</button> -->\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #modalPaymentMethodDetail [dialogClass]=\"'modal-lg btn-page'\" [containerClick]=\"false\">\n  <div class=\"app-modal-header\">\n    <h5 style=\"text-align:center\">{{ 'CONTENT.sentence_payment_2' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalPaymentMethodDetail.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <h5 style=\"text-align:left\">{{ 'CONTENT.atm' | translate }}</h5>\n    <hr>\n    <p>Tes</p>\n    <h5 style=\"text-align:left\">{{ 'CONTENT.m-banking' | translate }}</h5>\n    <hr>\n    <p>Tes</p>\n    <h5 style=\"text-align:left\">{{ 'CONTENT.e-banking' | translate }}</h5>\n    <hr>\n    <p>Tes</p>\n  </div>\n</app-ui-modal>\n");

/***/ }),

/***/ "./src/app/theme/registration-history/payment-registration/payment-registration-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/registration-history/payment-registration/payment-registration-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: PaymentRegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRegistrationRoutingModule", function() { return PaymentRegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _payment_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-registration.component */ "./src/app/theme/registration-history/payment-registration/payment-registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _payment_registration_component__WEBPACK_IMPORTED_MODULE_2__["PaymentRegistrationComponent"]
    }
];
let PaymentRegistrationRoutingModule = class PaymentRegistrationRoutingModule {
};
PaymentRegistrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PaymentRegistrationRoutingModule);



/***/ }),

/***/ "./src/app/theme/registration-history/payment-registration/payment-registration.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/registration-history/payment-registration/payment-registration.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-merah {\n  background-color: #e01a3f;\n  border-radius: 5px;\n}\n\n.div-merah1 {\n  background-color: #e01a3f;\n  border-radius: 5px;\n  display: inline-block;\n}\n\n.text-setting {\n  font-size: 10pt;\n}\n\n.index-up {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2Zyb250ZW5kLWFkbS10cmlzYWt0aS1tYXN0ZXIvc3JjL2FwcC90aGVtZS9yZWdpc3RyYXRpb24taGlzdG9yeS9wYXltZW50LXJlZ2lzdHJhdGlvbi9wYXltZW50LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvcmVnaXN0cmF0aW9uLWhpc3RvcnkvcGF5bWVudC1yZWdpc3RyYXRpb24vcGF5bWVudC1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlZ2lzdHJhdGlvbi1oaXN0b3J5L3BheW1lbnQtcmVnaXN0cmF0aW9uL3BheW1lbnQtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1tZXJhaHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwMWEzZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRpdi1tZXJhaDF7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDFhM2Y7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRleHQtc2V0dGluZ3tcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuLmluZGV4LXVwIHtcbiAgei1pbmRleDogMjtcbn1cbiIsIi5kaXYtbWVyYWgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAxYTNmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kaXYtbWVyYWgxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwMWEzZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0LXNldHRpbmcge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5pbmRleC11cCB7XG4gIHotaW5kZXg6IDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/registration-history/payment-registration/payment-registration.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/registration-history/payment-registration/payment-registration.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PaymentRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRegistrationComponent", function() { return PaymentRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










let PaymentRegistrationComponent = class PaymentRegistrationComponent {
    // subscription: Subscription;
    constructor(translateService, broadcasterService, userService, chartService, route, router, fb, location, viewportScroller) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.userService = userService;
        this.chartService = chartService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.location = location;
        this.viewportScroller = viewportScroller;
        this.bodyClasses = 'fixed-body';
        this.yScrollStack = [];
        this.registrationDataForm = this.fb.group({
            registration_number: [''],
            program: [''],
            selection_path: [''],
            payment_method: [''],
            fullname: [''],
            NIK: [''],
            registration_fee: [''],
            checklist: ['']
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
        this.paymentMethod = '0';
        this.isPaymentMethodNotNull = false;
        this.viewportScroller.scrollToPosition([0, 0]);
    }
    ngOnInit() {
        //   this.router.events.subscribe((evt) => {
        //     if (!(evt instanceof NavigationEnd)) {
        //         return;
        //     }
        //     document.body.scrollTop = 0;
        // });
        //   this.location.subscribe((ev:PopStateEvent) => {
        //     this.lastPoppedUrl = ev.url;
        // });
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationEnd)
        //   ).subscribe(() => window.scroll(0,0));
        // this.router.events.subscribe((ev:any) => {
        //     if (ev instanceof NavigationStart) {
        //         if (ev.url != this.lastPoppedUrl)
        //             this.yScrollStack.push(window.scrollY);
        //     } else if (ev instanceof NavigationEnd) {
        //         if (ev.url == this.lastPoppedUrl) {
        //             this.lastPoppedUrl = undefined;
        //             window.scrollTo(0, this.yScrollStack.pop());
        //         } else
        //             window.scrollTo(0, 0);
        //     }
        // });
        //Filtering
        this.loadPaymentMethodDataFilter();
        //Data
        this.loadDetailParticipantPaymentData(this.registration_number);
        this.loadDetailParticipantPaymentResultData(this.registration_number);
    }
    // ngOnDestroy() {
    //   this.subscription.unsubscribe();
    // }
    mode(param) {
        this.edit = param;
    }
    loadSuccess() {
        this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: 'Data yang anda masukkan sudah tersimpan',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'success'
        });
    }
    loadError() {
        this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: 'Terjadi kesalahan sistem',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
        });
    }
    onDeselected(val) {
        switch (val) {
            case 'paymentMethod':
                this.paymentMethod = '0';
                break;
        }
    }
    loadPaymentMethodDataFilter() {
        this.loadFilter = true;
        this.chartService.getPaymentMethodData().subscribe((filterArray) => {
            const dataPaymentMethod = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].method
                };
                dataPaymentMethod.push(x);
                this.listPaymentMethod = dataPaymentMethod;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadDetailParticipantPaymentData(registration_number) {
        this.loading = true;
        this.edit = 'edit';
        this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
            if (result) {
                const { registration_number, selection_program, selection_path, payment_method_id } = result.data[0];
                this.registrationDataForm.patchValue({ registration_number: registration_number });
                this.registrationDataForm.patchValue({ program: selection_program });
                this.registrationDataForm.patchValue({ selection_path: result.data[0]['selection_path'] });
                this.registrationDataForm.patchValue({ payment_method: payment_method_id });
                this.registrationDataForm.patchValue({ registration_fee: result.data[0]['price'] });
                this.loading = false;
            }
        }, err => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: err.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loading = false;
        });
    }
    createPaymentRegistrationData() {
        this.loading = true;
        const data = {
            registration_number: this.registration_number,
            payment_method: this.registrationDataForm.controls['payment_method'].value,
            payment_status: 2
        };
        this.chartService.upRegistrationData(data).subscribe(res => {
            if (res != null) {
                if (res.status == 'Success') {
                    this.loadSuccess();
                    this.paymentMethodName = res.payment_method_name;
                    // console.warn(res);
                    // console.warn(this.paymentMethodName);
                    // this.renderStudyProgramData();
                    this.registrationDataForm.patchValue({ payment_method: res.payment_method_name });
                    this.registration_number = res.registration_number;
                    const data = {
                        registration_number: this.registration_number,
                        registration_step_id: 2
                    };
                    this.userService.postRegistrationHistoryData(data).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.loadSuccess();
                            }
                            else {
                                this.loadError();
                            }
                        }
                        else {
                            this.loadError();
                        }
                    }, (reason) => {
                        this.loadError();
                    });
                    this.loading = false;
                }
                else {
                    this.loadError();
                }
            }
            else {
                this.loadError();
            }
        }, (reason) => {
            this.loadError();
        });
    }
    loadDetailParticipantPaymentResultData(registration_number) {
        this.loading = true;
        this.edit = 'edit';
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.registrationDataForm.patchValue({ fullname: res.fullname });
                this.registrationDataForm.patchValue({ NIK: res.identify_number });
                this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
                    this.registrationDataForm.patchValue({ registration_number: this.registration_number });
                    this.registrationDataForm.patchValue({ payment_method: result.data[0].payment_method_id });
                    this.registrationDataForm.patchValue({ registration_fee: result.data[0].price });
                    if (result.data[0].payment_method_id !== null) {
                        this.isPaymentMethodNotNull = true;
                    }
                    else {
                        this.isPaymentMethodNotNull = false;
                    }
                    // this.registrationDataForm.patchValue({registration_fee: });
                });
            });
        }
        else {
            const unameEx = this.userProfile.username + '@gmail.com';
            this.userService.getParticipantDetailData(unameEx).subscribe(res => {
                this.registrationDataForm.patchValue({ fullname: res.fullname });
                this.registrationDataForm.patchValue({ NIK: res.identify_number });
                this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
                    this.registrationDataForm.patchValue({ registration_number: this.registration_number });
                    this.registrationDataForm.patchValue({ payment_method: result.data[0].payment_method_id });
                    this.registrationDataForm.patchValue({ registration_fee: result.data[0].price });
                    // window.scrollTo(0, 0);
                    if (result.data[0].payment_method_id !== null) {
                        this.isPaymentMethodNotNull = true;
                    }
                    else {
                        this.isPaymentMethodNotNull = false;
                    }
                    this.loading = false;
                    //   this.location.subscribe((ev:PopStateEvent) => {
                    //     this.lastPoppedUrl = ev.url;
                    // });
                });
            });
        }
    }
    goToRegistrationHistory() {
        window.location.href = 'registration-history/';
        // this.router.navigate(['/','registration-history'])
    }
};
PaymentRegistrationComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"] }
];
PaymentRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/payment-registration/payment-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-registration.component.scss */ "./src/app/theme/registration-history/payment-registration/payment-registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"]])
], PaymentRegistrationComponent);



/***/ }),

/***/ "./src/app/theme/registration-history/payment-registration/payment-registration.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/registration-history/payment-registration/payment-registration.module.ts ***!
  \************************************************************************************************/
/*! exports provided: PaymentRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRegistrationModule", function() { return PaymentRegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _payment_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-registration.component */ "./src/app/theme/registration-history/payment-registration/payment-registration.component.ts");
/* harmony import */ var _payment_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-registration-routing.module */ "./src/app/theme/registration-history/payment-registration/payment-registration-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");







let PaymentRegistrationModule = class PaymentRegistrationModule {
};
PaymentRegistrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payment_registration_component__WEBPACK_IMPORTED_MODULE_3__["PaymentRegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payment_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["PaymentRegistrationRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]
        ]
    })
], PaymentRegistrationModule);



/***/ })

}]);
//# sourceMappingURL=payment-registration-payment-registration-module-es2015.js.map