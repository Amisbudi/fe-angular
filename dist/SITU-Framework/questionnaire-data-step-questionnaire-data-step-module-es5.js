function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionnaire-data-step-questionnaire-data-step-module"], {
  /***/
  "./node_modules/angular-datatables/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/angular-datatables/index.js ***!
    \**************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatablesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
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

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.directive.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
    \*****************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var DataTableDirective =
    /** @class */
    function () {
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
        } else {
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

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DataTableDirective.prototype, "dtOptions", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])], DataTableDirective.prototype, "dtTrigger", void 0);

      DataTableDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[datatable]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], DataTableDirective);
      return DataTableDirective;
    }(); //# sourceMappingURL=angular-datatables.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.module.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
    \**************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule_1 = DataTablesModule;

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule_1
        };
      };

      var DataTablesModule_1;
      DataTablesModule = DataTablesModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
        exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
      })], DataTablesModule);
      return DataTablesModule;
    }(); //# sourceMappingURL=angular-datatables.module.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeAdmMsQuestionnaireDataQuestionnaireDataStepQuestionnaireDataStepComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'CONTENT.question-data'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<app-card cardTitle=\"{{ 'CONTENT.question-data' | translate }}\" headerClass=\"text-center text-md-left\" [hidHeader]=\"true\" [options]=\"false\" [loading]=\"loadtableQuestionData\">\n  <div class=\"row align-items-center p-2\">\n    <div class=\"col-6 text-left text-md-left\">\n      <button class=\"btn btn-secondary btn-sm btn-round has-ripple\" routerLink=\"/adm-ms-questionnaire-data\">\n          <i class=\"feather icon-chevron-left\"></i> {{'ROOT.back' | translate}}\n      </button>\n    </div>\n    <div class=\"col-6 text-center text-md-right\">\n      <button class=\"btn btn-success btn-sm btn-round has-ripple\" (click)=\"openformDetailQuestionData(null, 'input')\">\n          <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-question' | translate}}\n      </button>\n    </div>\n  </div>\n  <form class=\"md-float-material form-material\" action=\"javascript:\">\n    <div class=\"row pl-2 pr-2\">\n      <div class=\"col-md-3 mt-2\">\n        <div class=\"form-group mb-2\">\n          <ng-select name=\"activeStatusFilter\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.active-status' | translate\"\n            [ngClass]=\"'custom bg-white'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"activeStatusFilter\"\n            (deselected)=\"onDeselected('activeStatusFilter')\" [options]=\"listActiveStatusFilters\"\n            (selected)=\"applyFilter(activeStatusFilter)\"></ng-select>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"table-responsive pb-1\">\n    <table datatable class=\"table table-bordered table-hover\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n          <th scope=\"col\" class=\"center-table question-width\">{{ 'CONTENT.question' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.question-type' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.answer-options' | translate}}</th>\n          <th scope=\"col\" class=\"center-table status-width\">{{ 'CONTENT.active-status' | translate}}</th>\n          <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"questionData?.length != 0\">\n        <tr *ngFor=\"let data of questionData; let i = index;\">\n          <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}. </th>\n          <td><strong>{{ data.detail}}</strong></td>\n          <td class=\"center-table\"><strong>{{ data.question_type_name}}</strong></td>\n          <td>\n            <table *ngIf=\"data.answer_options?.length != 0\" >\n              <div [hidden]=\"data.question_type_id === 1 || data.question_type_id === 2 || data.question_type_id === 6 || data.question_type_id === 7 || data.question_type_id === 8 || data.question_type_id === 9\" >\n              <tbody *ngFor=\"let datax of data.answer_options; let j=index;\">\n                <td>\n                  <!-- MULTIPLE CHOICE -->\n                  <tr *ngIf=\"data.question_type_id== 3\">\n                    <td ><strong><input type=\"radio\">\n                        {{datax.value}}\n                    </strong></td>\n                  </tr>\n                  <!-- CHECKBOX -->\n                  <tr *ngIf=\"data.question_type_id== 4\">\n                    <td><strong><input type=\"checkbox\">\n                        {{datax.value}}\n                    </strong></td>\n                  </tr>\n                  <!-- DROPDOWN -->\n                  <tr *ngIf=\"data.question_type_id== 5\">\n                    <td><strong>\n                      <!-- <input type=\"checkbox\"> DROPDOWN-->\n                      {{datax.value}}\n                    </strong></td>\n                  </tr>\n                </td>\n                <td class=\"center-table\">\n                  <button class=\"btn btn-warning btn-sm btn-round has-ripple\" (click)=\"openformDetailAsnwerOptionData(data.id,datax.id, 'edit')\">\n                  <!-- <button class=\"btn btn-warning btn-sm btn-round has-ripple\" (click)=\"loadDetailAnswerOptionData(data.id,datax.id)\"> -->\n                    <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}} {{'CONTENT.option' | translate}}</span>\n                  </button>\n                </td>\n              </tbody>\n            </div>\n            </table>\n            <table *ngIf=\"data.answer_options?.length == 0\">\n              <tbody>\n                <!-- SHORT ANSWER -->\n                <tr *ngIf=\"data.question_type_id== 1;\"></tr>\n                <!-- PARAGRAPH -->\n                <tr *ngIf=\"data.question_type_id== 2\"></tr>\n                <!-- FILE UPLOAD -->\n                <tr *ngIf=\"data.question_type_id== 6\"></tr>\n                <!-- LINEAR SCALE -->\n                <tr *ngIf=\"data.question_type_id== 7\"></tr>\n                <!-- DATE -->\n                <tr *ngIf=\"data.question_type_id== 8\"></tr>\n                <!-- TIME -->\n                <tr *ngIf=\"data.question_type_id== 9\"></tr>\n              </tbody>\n            </table>\n          </td>\n          <td class=\"center-table status-width\">\n            <span\n              class=\"badge badge-{{ data.active_status === true ? 'success' : 'danger' }}\">{{\n              data.active_status === true ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)\n              }}\n            </span>\n          </td>\n          <td class=\"center-table\">\n            <button class=\"btn btn-warning btn-sm btn-round has-ripple\"  (click)=\"openformDetailQuestionData(data.id, 'edit');\">\n              <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n            </button>\n            <button *ngIf=\"data.question_type_id==3 || data.question_type_id==4 || data.question_type_id==5\" class=\"btn btn-primary btn-sm btn-round has-ripple m-1\" (click)=\"openformDetailAsnwerOptionData(data.id, null, 'input')\">\n              <i class=\"icofont icofont-plus\"></i> <span class=\"d-sm-none\"> {{'ROOT.add' | translate}} {{'CONTENT.option' | translate}}</span>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"questionData?.length == 0 && !loadtableQuestionnaireData\">\n        <tr>\n          <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n      </tbody>\n      <tbody *ngIf=\"questionData?.length == 0 && loadtableQuestionnaireData\">\n        <tr>\n          <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n          <td class=\"hidden\"></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</app-card>\n\n<!-- Forms Modal -->\n<app-ui-modal #questionDataModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [loading]=\"loading\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{\n      formType === \"input\"\n        ? (\"ROOT.add\" | translate)\n        : (\"ROOT.edit\" | translate)\n    }} {{ 'CONTENT.question' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"questionDataModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup] = \"questionForm\" (ngSubmit)= \"createQuestionData()\">\n      <!-- <div class=\"row\"> -->\n        <app-card [hidHeader]=\"true\" [loading]=\"loadingModal\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.question' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"pinPrice\" required  formControlName=\"detail\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.please_input' | translate }} {{ 'CONTENT.question' | translate }}</label>\n          </div>\n          <!-- <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ordering' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"pinPrice\" required>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.please_input' | translate }} {{ 'CONTENT.ordering' | translate }}</label>\n          </div> -->\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.option-type' | translate }}</label>\n            <ng-select [placeholder]=\"'CONTENT.option-type'|translate\" [ngClass]=\"'custom bg-white'\" required  formControlName=\"question_type_id\" [(ngModel)]=\"questionType\" (deselected)=\"onDeselected('questionType')\"  [options]=\"listSelectionQuestionType\"></ng-select>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' | translate }}{{ 'CONTENT.option-type' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\" value=\"1\" required formControlName=\"active_status\">\n              <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status2\"  name=\"active_status\" class=\"custom-control-input\" value=\"0\" required [checked]=\"true\"  formControlName=\"active_status\">\n              <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n          </div>\n          <!-- <div class=\"form-group mb-2\" *ngIf=\"questionType==3 || questionType==4 || questionType==5\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.option' | translate }}</label>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-11\">\n                <input type=\"text\" class=\"form-control\" name=\"option\" required >\n              </div>\n              <div class=\"form-group col-md-1\">\n                <button class=\"btn btn-primary btn-sm btn-round has-ripple\" (click)=\"optionDataModal.show()\">\n                  <i class=\"icofont icofont-plus\"></i> <span class=\"d-sm-none\"> {{'ROOT.add' | translate}}</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"table-responsive pb-1\">\n              <table datatable class=\"table table-bordered table-hover\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.option' | translate}}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.ordering' | translate}}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\" style=\"padding-left: 10px\"></th>\n                    <td></td>\n                    <td></td>\n                    <td class=\"center-table\">\n                      <button class=\"btn btn-warning btn-sm btn-round has-ripple\" >\n                        <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div> -->\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button *ngIf=\"edit == 'input'\" type=\"button\" (click)=\"questionDataModal.hide()\" class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"questionDataModal.hide()\" [disabled]=\"questionForm.invalid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </app-card>\n      <!-- </div> -->\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #optionDataModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [loading]=\"loading\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ formType === 'input' ? ('ROOT.add' | translate) : ('ROOT.edit' | translate) }} {{ 'CONTENT.option' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"optionDataModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup] = \"answerOptionForm\" (ngSubmit)= \"createAnswerOptionData()\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <!-- <div class=\"row\" [ngSwitch]=\"edit\"> -->\n        <app-card [hidHeader]=\"true\" [loading]=\"loadingModal\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.option' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"option\" required formControlName=\"option\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.please_input' | translate }} {{ 'CONTENT.questionnaire-name' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ordering' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"ordering\" required formControlName=\"ordering\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.please_input' | translate }} {{ 'CONTENT.questionnaire-description' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button *ngIf=\"edit == 'input'\" type=\"button\" (click)=\"optionDataModal.hide()\" class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"optionDataModal.hide()\"  [disabled] =\"!answerOptionForm.valid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </app-card>\n\n      <!-- </div> -->\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n";
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step-routing.module.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step-routing.module.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: QuestionnaireDataStepRoutingModule */

  /***/
  function srcAppThemeAdmMsQuestionnaireDataQuestionnaireDataStepQuestionnaireDataStepRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireDataStepRoutingModule", function () {
      return QuestionnaireDataStepRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _questionnaire_data_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./questionnaire-data-step.component */
    "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _questionnaire_data_step_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireDataStepComponent"]
    }];

    var QuestionnaireDataStepRoutingModule = function QuestionnaireDataStepRoutingModule() {
      _classCallCheck(this, QuestionnaireDataStepRoutingModule);
    };

    QuestionnaireDataStepRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], QuestionnaireDataStepRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeAdmMsQuestionnaireDataQuestionnaireDataStepQuestionnaireDataStepComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.question-width {\n  max-width: 100px;\n}\n\n.status-width {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2Zyb250ZW5kLWFkbS10cmlzYWt0aS1tYXN0ZXIvc3JjL2FwcC90aGVtZS9hZG0tbXMtcXVlc3Rpb25uYWlyZS1kYXRhL3F1ZXN0aW9ubmFpcmUtZGF0YS1zdGVwL3F1ZXN0aW9ubmFpcmUtZGF0YS1zdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9hZG0tbXMtcXVlc3Rpb25uYWlyZS1kYXRhL3F1ZXN0aW9ubmFpcmUtZGF0YS1zdGVwL3F1ZXN0aW9ubmFpcmUtZGF0YS1zdGVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDVkY7O0FEWUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNURjs7QURXQTtFQUNDLGtCQUFBO0FDUkQ7O0FEVUE7RUFDRSxnQkFBQTtBQ1BGOztBRFNBO0VBQ0UsZUFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvYWRtLW1zLXF1ZXN0aW9ubmFpcmUtZGF0YS9xdWVzdGlvbm5haXJlLWRhdGEtc3RlcC9xdWVzdGlvbm5haXJlLWRhdGEtc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRkIHtcblxuLy8gICAgIC8qIGNzcy0zICovXG4vLyAgICAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuLy8gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4vLyAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4vLyAgICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcblxuLy8gfVxuXG50ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucXVlc3Rpb24td2lkdGh7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4uc3RhdHVzLXdpZHRoe1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbiIsInRkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnRoIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jZW50ZXItdGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5xdWVzdGlvbi13aWR0aCB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5zdGF0dXMtd2lkdGgge1xuICBtYXgtd2lkdGg6IDgwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: QuestionnaireDataStepComponent */

  /***/
  function srcAppThemeAdmMsQuestionnaireDataQuestionnaireDataStepQuestionnaireDataStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireDataStepComponent", function () {
      return QuestionnaireDataStepComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/admin-management.service */
    "./src/app/_services/admin-management.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/broadcaster.service */
    "./src/app/_services/broadcaster.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QuestionnaireDataStepComponent =
    /*#__PURE__*/
    function () {
      function QuestionnaireDataStepComponent(translateService, broadcasterService, chartService, route, fb) {
        _classCallCheck(this, QuestionnaireDataStepComponent);

        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.route = route;
        this.fb = fb;
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.questionnaireDataForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          active_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.questionForm = this.fb.group({
          question_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          detail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          active_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.answerOptionForm = this.fb.group({
          option: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
          ordering: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
        this.id = +this.route.snapshot.paramMap.get('id'); //questionnaire_id

        this.type = 'default';
        this.loadingModal = false;
        this.activeStatusFilter = '1';
        this.listActiveStatusFilters = [{
          label: 'ALL',
          value: ''
        }, {
          label: 'ACTIVE',
          value: '1'
        }, {
          label: 'NONACTIVE',
          value: '0'
        }];
      }

      _createClass(QuestionnaireDataStepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions[0] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'No data found!',
              emptyTable: 'No data found!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading data. . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            order: [[0, 'asc']]
          }; // this.loadQuestionnaireData();

          this.loadQuestionTypeFilter();
          this.loadQuestionData(this.id); // this.loadDetailAnswerOptionData(this.id);
        }
      }, {
        key: "onDeselected",
        value: function onDeselected(val) {
          switch (val) {
            case 'questionType':
              this.questionType = '0';
              break;

            case 'activeStatusFilter':
              this.activeStatusFilter = '1';
              break;
          }
        }
      }, {
        key: "renderTable1",
        value: function renderTable1() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 0) {
              dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            }
          });
        }
      }, {
        key: "loadQuestionTypeFilter",
        value: function loadQuestionTypeFilter() {
          var _this2 = this;

          this.loadFilter = true;
          this.chartService.getQuestionTypeData().subscribe(function (filterArray) {
            var dataQuestionType = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].type
              };
              dataQuestionType.push(x);
              _this2.listSelectionQuestionType = dataQuestionType;
            }

            _this2.loadFilter = false;
          }, function (err) {
            _this2.loadError();

            _this2.loadFilter = false;
          });
        } // loadQuestionnaireData() {
        //   this.loadtableQuestionnaireData = true;
        //   this.chartService.getQuestionnaireData(`?active_status=1`).subscribe(response => {
        //       setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
        //         this.tableData = response.data;
        //         this.dtTrigger1.next(); // Trigger for load datatable
        //         this.loadtableQuestionnaireData = false;
        //       }, 3000);
        //     }, err => {
        //       // this.loadError();
        //       this.loadtableQuestionnaireData = false;
        //     });
        // }

      }, {
        key: "loadQuestionData",
        value: function loadQuestionData(id) {
          var _this3 = this;

          this.loadtableQuestionData = true;

          if (this.activeStatusFilter == '1') {
            this.activeStatusBool = true;
            this.chartService.getQuestionData("questionare_id=".concat(this.id, "&active_status=").concat(this.activeStatusBool)).subscribe(function (result) {
              setTimeout(function () {
                _this3.questionData = result;

                _this3.dtTrigger.next();

                _this3.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this3.loadtableQuestionData = false;
            });
          } else if (this.activeStatusFilter == '0') {
            this.activeStatusBool = false;
            this.chartService.getQuestionData("questionare_id=".concat(this.id, "&active_status=").concat(this.activeStatusBool)).subscribe(function (result) {
              setTimeout(function () {
                _this3.questionData = result;

                _this3.dtTrigger.next();

                _this3.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this3.loadtableQuestionData = false;
            });
          } else {
            this.chartService.getQuestionData("questionare_id=".concat(this.id, "&active_status=")).subscribe(function (result) {
              setTimeout(function () {
                _this3.questionData = result;

                _this3.dtTrigger.next();

                _this3.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this3.loadtableQuestionData = false;
            });
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(activeStatusFilter) {
          var _this4 = this;

          this.loadtableQuestionData = true;

          if (this.activeStatusFilter === '1') {
            this.activeStatusBool = true;
            this.chartService.getQuestionData("questionare_id=".concat(this.id, "&active_status=").concat(this.activeStatusBool)).subscribe(function (result) {
              setTimeout(function () {
                _this4.questionData = result;

                _this4.dtTrigger.next();

                _this4.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this4.loadtableQuestionData = false;
            });
          } else if (this.activeStatusFilter === '0') {
            this.activeStatusBool = false;
            this.chartService.getQuestionData("questionare_id=".concat(this.id, "&active_status=").concat(this.activeStatusBool)).subscribe(function (result) {
              setTimeout(function () {
                _this4.questionData = result;

                _this4.dtTrigger.next();

                _this4.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this4.loadtableQuestionData = false;
            });
          } else {
            this.chartService.getQuestionData("questionare_id=".concat(this.id, "&active_status=").concat(activeStatusFilter)).subscribe(function (result) {
              setTimeout(function () {
                _this4.questionData = result;

                _this4.dtTrigger.next();

                _this4.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this4.loadtableQuestionData = false;
            });
          }

          this.renderTable1();
        }
      }, {
        key: "openformDetailQuestionData",
        value: function openformDetailQuestionData(questionId, type) {
          var _this5 = this;

          this.formType = type;
          this.loadingModal = true;

          if (type === 'edit') {
            this.questionId = questionId;
            this.chartService.getQuestionData("".concat(this.id, "&question_id=").concat(this.questionId)).subscribe(function (result) {
              setTimeout(function () {
                _this5.questionDetailData = result;
                _this5.loadingModal = false;

                _this5.questionForm.patchValue({
                  questionare_id: _this5.id
                });

                _this5.questionForm.patchValue({
                  question_type_id: _this5.questionDetailData[0].question_type_id.toString()
                });

                _this5.questionForm.patchValue({
                  detail: _this5.questionDetailData[0].detail
                });

                if (_this5.questionDetailData[0].active_status.toString() == "true") {
                  _this5.activeStatus = "1";
                } else if (_this5.questionDetailData[0].active_status.toString() == "false") {
                  _this5.activeStatus = "0";
                }

                _this5.questionForm.patchValue({
                  active_status: _this5.activeStatus
                });
              }, 3000);
            }, function (err) {
              _this5.loadError();
            });
          } else {
            this.questionForm.reset();
            this.loadingModal = false;
          }

          this.questionDataModal.show();
        }
      }, {
        key: "createQuestionData",
        value: function createQuestionData() {
          var _this6 = this;

          this.loading = true;

          switch (this.formType) {
            case 'input':
              var data = {
                questionare_id: this.id,
                question_type_id: this.questionForm.controls['question_type_id'].value,
                detail: this.questionForm.controls['detail'].value,
                active_status: this.questionForm.controls['active_status'].value
              };
              this.chartService.postQuestionData(data).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    _this6.loadSuccess();

                    _this6.questionDataModal.hide();

                    _this6.loadQuestionData(_this6.id);

                    _this6.activeStatusFilter = '';

                    _this6.renderTable1();

                    _this6.loading = false;
                  } else {
                    _this6.loadError();
                  }
                } else {
                  _this6.loadError();
                }
              }, function (reason) {
                _this6.loadError();
              });
              break;

            case 'edit':
              var dataUpdate = {
                id: this.questionId,
                questionare_id: this.id,
                question_type_id: this.questionForm.value.question_type_id,
                detail: this.questionForm.value.detail,
                active_status: this.questionForm.value.active_status
              };
              this.chartService.upQuestionData(dataUpdate).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    _this6.loadSuccess();

                    _this6.questionDataModal.hide();

                    _this6.loadQuestionData(_this6.id);

                    _this6.renderTable1();

                    _this6.loading = false;
                    _this6.activeStatusFilter = '';
                  } else {
                    _this6.loadError();
                  }
                } else {
                  _this6.loadError();
                }
              }, function (reason) {
                _this6.loadError();
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "openformDetailAsnwerOptionData",
        value: function openformDetailAsnwerOptionData(questionId, answerOptionId, type) {
          var _this7 = this;

          this.formType = type;
          this.loadingModal = true;

          if (type === 'edit') {
            this.questionId = questionId;
            this.answerOptionId = answerOptionId;
            this.chartService.getAnswerOptionData("".concat(this.questionId, "&id=").concat(this.answerOptionId)).subscribe(function (result) {
              setTimeout(function () {
                _this7.loadingModal = false;
                _this7.answerOptionDetailData = result;

                _this7.answerOptionForm.patchValue({
                  option: _this7.answerOptionDetailData[0].value
                });

                _this7.answerOptionForm.patchValue({
                  ordering: _this7.answerOptionDetailData[0].ordering
                });
              }, 3000);
            }, function (err) {
              _this7.loadError();
            });
          } else {
            this.questionId = questionId;
            this.loadingModal = false;
            this.answerOptionForm.reset();
          }

          this.optionDataModal.show();
        }
      }, {
        key: "createAnswerOptionData",
        value: function createAnswerOptionData() {
          var _this8 = this;

          switch (this.formType) {
            case 'input':
              var data = {
                question_id: this.questionId,
                value: this.answerOptionForm.controls['option'].value,
                ordering: this.answerOptionForm.controls['ordering'].value
              };
              this.chartService.postAnswerOptionData(data).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    _this8.loadSuccess();

                    _this8.renderTable1();

                    _this8.loadQuestionData(_this8.id);

                    _this8.optionDataModal.hide();
                  } else {
                    _this8.loadError();
                  }
                } else {
                  _this8.loadError();
                }
              }, function (reason) {
                _this8.loadError();
              });
              break;

            case 'edit':
              var dataUpdate = {
                id: this.answerOptionId,
                question_id: this.questionId,
                value: this.answerOptionForm.value.option,
                ordering: this.answerOptionForm.value.ordering
              };
              this.chartService.upAnswerOptionData(dataUpdate).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this8.loadSuccess();

                  _this8.optionDataModal.hide();

                  _this8.renderTable1();

                  _this8.loadQuestionData(_this8.id);
                } else {
                  _this8.loadError();
                }
              }, function (reason) {
                _this8.loadError();
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "loadSuccess",
        value: function loadSuccess() {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: 'Data yang anda masukkan sudah tersimpan',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'success'
          });
        }
      }, {
        key: "loadError",
        value: function loadError() {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: 'Terjadi kesalahan sistem',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        }
      }, {
        key: "mode",
        value: function mode(param) {
          this.edit = param;
        }
      }]);

      return QuestionnaireDataStepComponent;
    }();

    QuestionnaireDataStepComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], QuestionnaireDataStepComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])], QuestionnaireDataStepComponent.prototype, "dtElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])], QuestionnaireDataStepComponent.prototype, "dtElement1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionnaireDataStepComponent.prototype, "myPersistenceModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('questionDataModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionnaireDataStepComponent.prototype, "questionDataModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('optionDataModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionnaireDataStepComponent.prototype, "optionDataModal", void 0);
    QuestionnaireDataStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire-data-step',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire-data-step.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire-data-step.component.scss */
      "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], QuestionnaireDataStepComponent);
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.module.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.module.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: QuestionnaireDataStepModule */

  /***/
  function srcAppThemeAdmMsQuestionnaireDataQuestionnaireDataStepQuestionnaireDataStepModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireDataStepModule", function () {
      return QuestionnaireDataStepModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _questionnaire_data_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./questionnaire-data-step.component */
    "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.component.ts");
    /* harmony import */


    var _questionnaire_data_step_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./questionnaire-data-step-routing.module */
    "./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-archwizard/dist */
    "./node_modules/ng2-archwizard/dist/index.js");

    var QuestionnaireDataStepModule = function QuestionnaireDataStepModule() {
      _classCallCheck(this, QuestionnaireDataStepModule);
    };

    QuestionnaireDataStepModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_questionnaire_data_step_component__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireDataStepComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _questionnaire_data_step_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireDataStepRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_7__["ArchwizardModule"]]
    })], QuestionnaireDataStepModule);
    /***/
  }
}]);
//# sourceMappingURL=questionnaire-data-step-questionnaire-data-step-module-es5.js.map