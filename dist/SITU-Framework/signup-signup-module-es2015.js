(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/signup/password-strength/password-strength.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/signup/password-strength/password-strength.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"strength mb-0\">\n  <ul class=\"strengthBar\">\n    <li class=\"point\" [style.background-color]=\"bar0\"></li>\n    <li class=\"point\" [style.background-color]=\"bar1\"></li>\n    <li class=\"point\" [style.background-color]=\"bar2\"></li>\n    <li class=\"point\" [style.background-color]=\"bar3\"></li>\n  </ul>\n  <p class=\"mb-0\" [style.color]=\"msgColor\">{{msg}}\n  </p>\n  <p *ngIf=\"passWeak\" class=\"error text-danger small form-text\">{{ messageReturn }}</p>\n  <p *ngIf=\"passFair\" class=\"error text-warning small form-text\">{{ messageReturn }}</p>\n  <p *ngIf=\"passGood\" class=\"error text-info small form-text\">{{ messageReturn }}</p>\n  <p *ngIf=\"passStrong\" class=\"error text-success small form-text\">{{ messageReturn }}</p>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper align-items-stretch aut-bg-img\">\n  <app-card cardTitle=\"{{'CONTENT.personal_document' | translate}}\" headerClass=\"text-center text-lg-left\"\n    class=\"col-12 col-md-6 center-cards align-self-center\" [hidHeader]=\"true\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-12 col-lg-5 p-4 text-center middle-content \">\n        <img src=\"assets/images/auth/signup-vector.svg\" class=\"center d-none d-xl-block d-lg-block\" alt=\"\">\n      </div>\n      <div class=\"col-12 col-md-12 col-lg-7 p-4 text-left middle-content\">\n        <span class=\"head-home\">\n          <div class=\"row\">\n            <div class=\"col-sm-2 col-md-2 text-center\">\n              <img src=\"assets/images/auth/trisakti-blue.png\" alt=\"\" style=\"width: 65px; margin-left: auto; margin-right: auto;\">\n            </div>\n            <div class=\"col-sm-10 col-md-10 text-left\">\n              <h5 class=\"text-center text-primary m-0 pt-3\">\n                {{ 'CONTENT.new-student-registration' | translate }} UNIVERSITAS TRISAKTI\n              </h5>\n            </div>\n          </div>\n          <hr class=\"head\">\n          <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registerDataForm\"\n            (ngSubmit)=\"createSelectionData()\">\n            <div class=\"row\" [ngSwitch]=\"edit\">\n              <div class=\"col-12 col-md-12\" *ngSwitchDefault>\n                <div class=\"form-group mb-2\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.fullname' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" required [placeholder]=\"'CONTENT.fullname' | translate\"\n                    formControlName=\"name\" maxLength=\"250\" minlength=\"3\">\n                  <label\n                    *ngIf=\"registerDataForm.controls.name.errors && registerDataForm.controls.name.errors.required && (registerDataForm.controls.name.touched || registerDataForm.controls.name.dirty)\"\n                    class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                  <label\n                    *ngIf=\"registerDataForm.controls.name.errors && registerDataForm.controls.name.errors.minlength && (registerDataForm.controls.name.touched || registerDataForm.controls.name.dirty)\"\n                    class=\"error text-danger small form-text\">Tidak valid! Nama lengkap paling sedikit berisikan 3 huruf!</label>\n                  <label\n                    *ngIf=\"registerDataForm.controls.name.errors && registerDataForm.controls.name.errors.pattern && (registerDataForm.controls.name.touched || registerDataForm.controls.name.dirty)\"\n                    class=\"error text-danger small form-text\">Tidak valid! Nama lengkap hanya boleh berisikan huruf!</label>\n  \n                </div>\n                <div class=\"form-group mb-2\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.phone_number' | translate }}</label>\n                  <input type=\"text\" class=\"form-control\" required\n                    [placeholder]=\"'CONTENT.placeholder-number' | translate\" formControlName=\"phonenumber\"\n                    maxlength=\"13\" minlength=\"11\">\n                  <label\n                    *ngIf=\"registerDataForm.controls.phonenumber.errors && registerDataForm.controls.phonenumber.errors.required && (registerDataForm.controls.phonenumber.touched || registerDataForm.controls.phonenumber.dirty)\"\n                    class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                  <label\n                    *ngIf=\"registerDataForm.controls.phonenumber.errors && registerDataForm.controls.phonenumber.errors.pattern && (registerDataForm.controls.phonenumber.touched || registerDataForm.controls.phonenumber.dirty)\"\n                    class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n                  <label\n                    *ngIf=\"registerDataForm.controls.phonenumber.errors && registerDataForm.controls.phonenumber.errors.minlength && (registerDataForm.controls.phonenumber.touched || registerDataForm.controls.phonenumber.dirty)\"\n                    class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n                </div>\n                <div class=\"form-group mb-2\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.email' | translate }}</label>\n                  <input type=\"email\" class=\"form-control\"\n                    pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n                    oninput=\"setCustomValidity('')\" required [placeholder]=\"'CONTENT.email' | translate\"\n                    formControlName=\"email\" maxLength=\"100\"\n                    [ngClass]=\"registerDataForm.controls.email.invalid && (registerDataForm.controls.email.dirty || registerDataForm.controls.email.touched)?'is-invalid':(registerDataForm.controls.email.valid?'is-valid':'')\">\n                  <label\n                    *ngIf=\"registerDataForm.controls.email.invalid && (registerDataForm.controls.email.dirty || registerDataForm.controls.email.touched )\"\n                    id=\"validation-email-error\"\n                    class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                    'CONTENT.email-match' | translate}}</label>\n                </div>\n                <div class=\"form-group mb-0\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.password' | translate }}</label>\n                  <input type=\"password\" maxLength=\"12\" class=\"form-control form-control-sm\" id=\"password\"\n                    formControlName=\"password\" [placeholder]=\"'CONTENT.password' | translate\" />\n                  <app-password-strength [passwordToCheck]=\"registerDataForm.value.password\"\n                    (passwordStrength)=\"passwordValid($event)\"></app-password-strength>\n                </div>\n                <div class=\"form-group mb-2\">\n                  <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.confirm-password' | translate }}</label>\n                  <input type=\"password\" (input)=\"checkPasswordRepeat($event)\" class=\"form-control form-control-sm\"\n                    maxLength=\"12\" id=\"passwordRepeat\" formControlName=\"passwordRepeat\"\n                    placeholder=\"Ulangi pengisian kata sandi\" />\n                  <div *ngIf=\"registerDataForm.controls.passwordRepeat.touched\">\n                    <label *ngIf=\"!passwordRepeatIsValid\" class=\"small form-text text-danger\"\n                      id=\"validation-passwordRepeat-error\">{{ 'CONTENT.password-match' | translate}}</label>\n                  </div>\n                </div>\n                <div class=\"form-group mb-0 mt-4 text-center\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm btn-block\"\n                    [disabled]=\"!(registerDataForm.valid && passwordIsValid && passwordRepeatIsValid) || loadingSignup\">\n                    <span *ngIf=\"this.loadingSignup\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                    <span *ngIf=\"this.loadingSignup\" class=\"load-text\"> Loading...</span>\n                    <span *ngIf=\"!this.loadingSignup\" class=\"btn-text\">{{ 'CONTENT.register' |\n                      translate }} <i class=\"icofont icofont-location-arrow\"></i></span>\n                  </button>\n                  <h6 class=\"mt-3 text-inverse f-w-400\">Sudah memiliki akun?\n                    <a [routerLink]=\"['/auth/login']\" style=\"color: cornflowerblue;\"> Login</a>\n                  </h6>\n                </div>\n              </div>\n            </div>\n          </form>\n        </span>\n      </div>\n    </div>\n  </app-card>\n</div>");

/***/ }),

/***/ "./src/app/theme/auth/signup/password-strength/password-strength.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/auth/signup/password-strength/password-strength.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".strengthBar {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: 2px;\n}\n\n.point:last-of-type {\n  margin: 0 !important;\n}\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2Zyb250ZW5kLWFkbS10cmlzYWt0aS1tYXN0ZXIvc3JjL2FwcC90aGVtZS9hdXRoL3NpZ251cC9wYXNzd29yZC1zdHJlbmd0aC9wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvYXV0aC9zaWdudXAvcGFzc3dvcmQtc3RyZW5ndGgvcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvYXV0aC9zaWdudXAvcGFzc3dvcmQtc3RyZW5ndGgvcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RyZW5ndGhCYXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IDJweDtcbn1cblxuLnBvaW50Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnQge1xuICBiYWNrZ3JvdW5kOiAjREREO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB3aWR0aDogNjJweDtcbn1cblxuLy8gcCB7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyB9XG4iLCIuc3RyZW5ndGhCYXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IDJweDtcbn1cblxuLnBvaW50Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnQge1xuICBiYWNrZ3JvdW5kOiAjREREO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB3aWR0aDogNjJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/auth/signup/password-strength/password-strength.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/auth/signup/password-strength/password-strength.component.ts ***!
  \************************************************************************************/
/*! exports provided: PasswordStrengthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordStrengthComponent", function() { return PasswordStrengthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordStrengthComponent = class PasswordStrengthComponent {
    // private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
    constructor() {
        this.passwordStrength = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.passwordHidden = true;
        this.colors = ['darkred', 'orange', 'steelblue', 'yellowgreen'];
        this.passFair = false;
        this.passGood = false;
        this.passWeak = false;
        this.passStrong = false;
    }
    ngOnInit() {
    }
    checkStrength(p) {
        // 1
        let force = 0;
        // 2
        const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
        const lowerLetters = /[a-z]+/.test(p);
        const upperLetters = /[A-Z]+/.test(p);
        const numbers = /[0-9]+/.test(p);
        const symbols = regex.test(p);
        // 3
        const flags = [lowerLetters, upperLetters, numbers, symbols];
        // 4
        let passedMatches = 0;
        for (const flag of flags) {
            passedMatches += flag === true ? 1 : 0;
        }
        // 5
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // 6
        force = (p.length <= 7) ? Math.min(force, 10) : force;
        // 7
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 30) : force;
        force = (passedMatches === 4) ? Math.min(force, 40) : force;
        return force;
    }
    ngOnChanges(changes) {
        const password = changes.passwordToCheck.currentValue;
        this.setBarColors(4, '#DDD');
        if (password) {
            const c = this.getColor(this.checkStrength(password));
            this.setBarColors(c.index, c.color);
            const pwdStrength = this.checkStrength(password);
            pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);
            switch (pwdStrength) {
                case 10:
                    this.passWeak = true;
                    this.passStrong = false;
                    this.passGood = false;
                    this.passFair = false;
                    this.msg = 'Kata sandi sangat lemah';
                    // this.msg = 'Password Strength is Weak';
                    this.messageReturn = 'Kata sandi harus terdiri dari 8-12 karakter setidaknya mengandung huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan tanda baca (@!*)';
                    break;
                case 20:
                    this.passWeak = false;
                    this.passStrong = false;
                    this.passGood = false;
                    this.passFair = true;
                    // this.msg = 'Password Strength is Fair';
                    this.msg = 'Kata sandi lemah';
                    this.messageReturn = 'Kata sandi harus terdiri dari 8-12 karakter setidaknya mengandung huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan tanda baca (@!*)';
                    break;
                case 30:
                    this.passWeak = false;
                    this.passStrong = false;
                    this.passGood = true;
                    this.passFair = false;
                    // this.msg = 'Password Strength is Good';
                    this.msg = 'Kata sandi cukup';
                    this.messageReturn = 'Kata sandi harus terdiri dari 8-12 karakter setidaknya mengandung huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan tanda baca (@!*)';
                    break;
                case 40:
                    this.passWeak = false;
                    this.passStrong = true;
                    this.passGood = false;
                    this.passFair = false;
                    // this.msg = 'Password Strength is Strong';
                    this.msg = 'Kata sandi aman';
                    this.messageReturn = 'Kata sandi Anda bagus. Nice work!';
                    break;
            }
        }
        else {
            this.msg = '';
            this.messageReturn = '';
        }
    }
    getColor(s) {
        let index = 0;
        if (s === 10) {
            index = 0;
        }
        else if (s === 20) {
            index = 1;
        }
        else if (s === 30) {
            index = 2;
        }
        else if (s === 40) {
            index = 3;
        }
        else {
            index = 4;
        }
        this.msgColor = this.colors[index];
        return {
            index: index + 1,
            color: this.colors[index]
        };
    }
    setBarColors(count, col) {
        for (let n = 0; n < count; n++) {
            this['bar' + n] = col;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PasswordStrengthComponent.prototype, "passwordToCheck", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PasswordStrengthComponent.prototype, "passwordStrength", void 0);
PasswordStrengthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-strength',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-strength.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/signup/password-strength/password-strength.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-strength.component.scss */ "./src/app/theme/auth/signup/password-strength/password-strength.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PasswordStrengthComponent);



/***/ }),

/***/ "./src/app/theme/auth/signup/password-strength/password-strength.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/auth/signup/password-strength/password-strength.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PasswordStrengthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordStrengthModule", function() { return PasswordStrengthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let PasswordStrengthModule = class PasswordStrengthModule {
};
PasswordStrengthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyModule"].forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
    })
], PasswordStrengthModule);



/***/ }),

/***/ "./src/app/theme/auth/signup/signup-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/auth/signup/signup-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/theme/auth/signup/signup.component.ts");




const routes = [
    {
        path: '',
        component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }
];
let SignupRoutingModule = class SignupRoutingModule {
};
SignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupRoutingModule);



/***/ }),

/***/ "./src/app/theme/auth/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/theme/auth/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.middle-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.middle-content > img {\n  max-width: 100%;\n}\n\n@media (min-width: 992px) {\n  span.head-home {\n    padding-right: 3rem !important;\n  }\n}\n\n.img-alert {\n  max-width: 90%;\n}\n\n@media (min-width: 576px) {\n  .img-alert {\n    max-width: 30%;\n  }\n}\n\n.img-alert .img-center {\n  display: inline-block;\n  width: 100%;\n}\n\n.taskboard-wrapper.pb-5 {\n  padding-bottom: 6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2Zyb250ZW5kLWFkbS10cmlzYWt0aS1tYXN0ZXIvc3JjL2FwcC90aGVtZS9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURDSTtFQUNFLGVBQUE7QUNDTjs7QURFRTtFQUNFO0lBQ0UsOEJBQUE7RUNDSjtBQUNGOztBREVFO0VBQ0UsY0FBQTtBQ0FKOztBRENJO0VBRkY7SUFHSSxjQUFBO0VDRUo7QUFDRjs7QURBSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0VOOztBREVFO0VBQ0UsK0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jZW50ZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWlkZGxlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICA+IGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIHNwYW4uaGVhZC1ob21lIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5pbWctYWxlcnQge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgfVxuICBcbiAgICAuaW1nLWNlbnRlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC50YXNrYm9hcmQtd3JhcHBlci5wYi01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbSAhaW1wb3J0YW50O1xuICB9IiwiLmltYWdlLWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5taWRkbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWlkZGxlLWNvbnRlbnQgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzcGFuLmhlYWQtaG9tZSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG4uaW1nLWFsZXJ0IHtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmltZy1hbGVydCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cbn1cbi5pbWctYWxlcnQgLmltZy1jZW50ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza2JvYXJkLXdyYXBwZXIucGItNSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/auth/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/auth/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let SignupComponent = class SignupComponent {
    constructor(translateService, broadcasterService, fb, chartService, modalService, router) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.fb = fb;
        this.chartService = chartService;
        this.modalService = modalService;
        this.router = router;
        this.registerDataForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)])],
            phonenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]*$')])),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passwordRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(250), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(`^[a-zA-Z' ]*$`)])),
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.edit = 'input';
    }
    ngOnInit() {
        this.passwordIsValid = false;
        this.loadingSignup = false;
    }
    passwordValid(event) {
        this.passwordIsValid = event;
    }
    checkPasswordRepeat(event) {
        if (event.target.value == this.registerDataForm.controls.password.value) {
            this.passwordRepeatIsValid = true;
        }
        else {
            this.passwordRepeatIsValid = false;
        }
    }
    createSelectionData() {
        this.loadingSignup = true;
        if (this.edit == 'input') {
            const data = {
                email: this.registerDataForm.controls['email'].value,
                name: this.registerDataForm.controls['name'].value,
                mobile_phone_number: this.registerDataForm.controls['phonenumber'].value,
                password: this.registerDataForm.controls['password'].value
            };
            const data1 = {
                username: this.registerDataForm.controls['email'].value,
                name: this.registerDataForm.controls['name'].value,
                password: this.registerDataForm.controls['password'].value
            };
            const { email, name, phonenumber, password } = this.registerDataForm.value;
            let payloadRegister = {
                username: email,
                name: name,
                mobile_phone_number: phonenumber,
                password: password
            };
            if (this.registerDataForm.controls['name'].value.length != 0) {
                this.chartService.postRegistrationData(data).subscribe(res => {
                    if (res.status == 'Success') {
                        this.loadingSignup = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: res.status,
                            text: res.message,
                            type: 'success',
                            allowOutsideClick: false,
                            showConfirmButton: true
                        }).then((confirm) => {
                            if (confirm.value) {
                                this.router.navigate(['auth/login']);
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: res.status,
                            text: res.message,
                            type: 'error',
                            showConfirmButton: true
                        });
                        this.loadingSignup = false;
                    }
                    // });
                }, (reason) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        title: 'Gagal Mendaftar!',
                        text: reason.error.message,
                        type: 'error',
                        showConfirmButton: true
                    });
                    this.loadingSignup = false;
                });
            }
        }
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
};
SignupComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/theme/auth/signup/signup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/theme/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/theme/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-strength/password-strength.module */ "./src/app/theme/auth/signup/password-strength/password-strength.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/theme/auth/signup/signup-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/theme/auth/signup/signup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./password-strength/password-strength.component */ "./src/app/theme/auth/signup/password-strength/password-strength.component.ts");











let SignupModule = class SignupModule {
};
SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_10__["PasswordStrengthComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_8__["ToastyModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angular_particle__WEBPACK_IMPORTED_MODULE_5__["ParticlesModule"],
            _password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_1__["PasswordStrengthModule"]
        ],
        entryComponents: [_password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_10__["PasswordStrengthComponent"]],
        exports: [_password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_10__["PasswordStrengthComponent"]]
    })
], SignupModule);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map