function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-questionnaire-data-participant-questionnaire-data-participant-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeQuestionnaireDataParticipantQuestionnaireDataParticipantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <app-card cardTitle=\"{{'CONTENT.questionnaire' | translate}}\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableQuestionData\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 mt-2 text-center\" *ngIf=\"questionnaireDesc?.length != 0 || questionnaireName?.length != 0\">\n                    <h5><strong>{{questionnaireName}}</strong></h5>\n                </div>\n            </div>\n            <form [formGroup]=\"form\">\n                <fieldset *ngFor=\"let question of questionData; let i = index;\">\n                    <h6 class=\"mb-1 mt-2\"><strong>{{ i+1 }}. {{question.detail}} <span class=\"required\">*</span></strong></h6>\n                    <div class=\"col-md-12\" *ngIf=\"question.question_type_id== 1\">\n                        <fieldset>\n                            <input required id=\"{{question.id}}_answer5\" type=\"text\" (change)=\"onText(question.id,$event);\" name=\"answerSelected{{question.id}}\">\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"question.question_type_id== 2\">\n                        <fieldset>\n                            <textarea name=\"answerSelected{{question.id}}\" id=\"{{question.id}}_answer6\" (change)=\"onParagraphText( question.id,$event);\"></textarea>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"question.answer_options?.length != 0 && question.question_type_id== 3\">\n                        <fieldset class=\"custom-control custom-radio\" *ngFor=\"let x of question.answer_options; let j = index;\">\n                          <input type=\"radio\" id=\"answer{{x.id}}\" (change)=\"onRadioButtonChange(x, $event)\" name=\"answerSelected{{question.id}}\"\n                           class=\"custom-control-input\" [value]=\"x.id\" required>\n                           <label class=\"custom-control-label\" for=\"answer{{x.id}}\">{{x.value}}</label>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"question.answer_options?.length != 0 && question.question_type_id== 4\">\n                        <fieldset class=\"custom-control custom-checkbox\" *ngFor=\"let x of question.answer_options; let j = index;\">\n                            <input class=\"custom-control-input\" id=\"answer{{x.id}}\" alt=\"{{question.id}}\" type=\"checkbox\" name=\"answerSelected{{question.id}}\" [value]=\"x.id\" (change)=\"onCheckboxChange(x, $event)\" required>\n                            <label class=\"custom-control-label\" for=\"answer{{x.id}}\">{{x.value}}</label>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"question.answer_options?.length != 0 && question.question_type_id== 5\">\n                        <fieldset>\n                            <select class=\"form-control\" id=\"sel1\" (change)=\"onDropdownSelected($event, question.answer_options)\" name=\"answerSelected{{question.id}}\">\n                              <option selected style=\"display: none;\">Pilih Salah Satu</option>\n                                <option *ngFor=\"let x of question.answer_options; let j=index;\" [value]=\"x.id\"  [label]=\"x.value\" ></option>\n                            </select>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"question.question_type_id== 6\">\n                        <fieldset>\n                            <input id=\"{{question.id}}_answer1\" type=\"file\">\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-6\" *ngIf=\"question.question_type_id== 7\">\n                        <fieldset>\n                            <input id=\"{{question.id}}_answer2\" type=\"range\" class=\"custom-range\" min=\"0\" max=\"5\" step=\"0.5\" (change)=\"changeLinear(question.id, $event)\">\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-6\" *ngIf=\"question.question_type_id== 8\">\n                        <fieldset>\n                            <input id=\"{{question.id}}_answer3\" type=\"date\" (change)=\"onDate( question.id, $event);\">\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-6\" *ngIf=\"question.question_type_id== 9\">\n                        <fieldset>\n                            <input id=\"{{question.id}}_answer4\" type=\"time\" (change)=\"onTime( question.id, $event);\">\n                        </fieldset>\n                    </div>\n                </fieldset>\n            </form>\n            <div [hidden]=\"loadtableQuestionData\" class=\"form-group mb-0 mt-4 text-center\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"sendQuistionnaire()\" [disabled]=\"loadingQuestion\">\n                    <span *ngIf=\"this.loadingQuestion\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                    <span *ngIf=\"this.loadingQuestion\" class=\"load-text\"> Loading...</span>\n                    <span *ngIf=\"!this.loadingQuestion\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'CONTENT.submit-questionnaire' | translate }}</span>\n                  </button>\n            </div>\n        </app-card>\n    </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #submitModal [containerClick]=\"false\" [dialogClass]=\"'modal-md'\" [hideFooter]=\"true\">\n    <div class=\"app-modal-header\">\n      <h5 class=\"modal-title\">{{ 'CONTENT.questionnaire-submitted' | translate }}</h5>\n    </div>\n    <div class=\"app-modal-body\">\n        <p class=\"modal-title text-center\">{{ 'CONTENT.questionnaire-submitted-success' | translate }}</p>\n        <br>\n        <div class=\"form-group mb-0 mt-3 text-center\">\n            <div class=\"btn-group\">\n                <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"gotoRegistration();\">\n                    OK\n                </button>\n            </div>\n        </div>\n    </div>\n</app-ui-modal>\n";
    /***/
  },

  /***/
  "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant-routing.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/theme/questionnaire-data-participant/questionnaire-data-participant-routing.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: QuestionnaireDataParticipantRoutingModule */

  /***/
  function srcAppThemeQuestionnaireDataParticipantQuestionnaireDataParticipantRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireDataParticipantRoutingModule", function () {
      return QuestionnaireDataParticipantRoutingModule;
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


    var _questionnaire_data_participant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./questionnaire-data-participant.component */
    "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _questionnaire_data_participant_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireDataParticipantComponent"]
    }];

    var QuestionnaireDataParticipantRoutingModule = function QuestionnaireDataParticipantRoutingModule() {
      _classCallCheck(this, QuestionnaireDataParticipantRoutingModule);
    };

    QuestionnaireDataParticipantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], QuestionnaireDataParticipantRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeQuestionnaireDataParticipantQuestionnaireDataParticipantComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td {\n  /* css-3 */\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n}\n\n.borderless tr, .borderless td, .borderless th {\n  border: none !important;\n}\n\n#txtbox {\n  height: 40px;\n  width: 800px;\n}\n\n.required {\n  color: red;\n}\n\ninput[type=text], select {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=date] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=time] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 100%;\n  height: 150px;\n  padding: 5px 5px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 12px;\n  color: grey;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2Zyb250ZW5kLWFkbS10cmlzYWt0aS1tYXN0ZXIvc3JjL2FwcC90aGVtZS9xdWVzdGlvbm5haXJlLWRhdGEtcGFydGljaXBhbnQvcXVlc3Rpb25uYWlyZS1kYXRhLXBhcnRpY2lwYW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9xdWVzdGlvbm5haXJlLWRhdGEtcGFydGljaXBhbnQvcXVlc3Rpb25uYWlyZS1kYXRhLXBhcnRpY2lwYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0FDQUo7O0FERUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtBQ0FBOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvcXVlc3Rpb25uYWlyZS1kYXRhLXBhcnRpY2lwYW50L3F1ZXN0aW9ubmFpcmUtZGF0YS1wYXJ0aWNpcGFudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcblxuICAgIC8qIGNzcy0zICovXG4gICAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4gICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcblxufVxuLmJvcmRlcmxlc3MgdHIsIC5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICB9XG4jdHh0Ym94XG57XG5oZWlnaHQ6NDBweDtcbndpZHRoOjgwMHB4O1xufVxuXG4ucmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaW5wdXRbdHlwZT10aW1lXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjpncmV5O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuIiwidGQge1xuICAvKiBjc3MtMyAqL1xuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbn1cblxuLmJvcmRlcmxlc3MgdHIsIC5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jdHh0Ym94IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogODAwcHg7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT10aW1lXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmV5O1xuICByZXNpemU6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: QuestionnaireDataParticipantComponent */

  /***/
  function srcAppThemeQuestionnaireDataParticipantQuestionnaireDataParticipantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireDataParticipantComponent", function () {
      return QuestionnaireDataParticipantComponent;
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


    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/participant.service */
    "./src/app/_services/participant.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/broadcaster.service */
    "./src/app/_services/broadcaster.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

    var QuestionnaireDataParticipantComponent =
    /*#__PURE__*/
    function () {
      function QuestionnaireDataParticipantComponent(translate, broadcasterService, chartService, userService, route, fb, router, cdRef) {
        var _this2 = this;

        _classCallCheck(this, QuestionnaireDataParticipantComponent);

        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.cdRef = cdRef;
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.radioButtonValues = [];
        this.questionnaireDataForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
          active_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe(function (l) {
          _this2.no = l;
        });
        this.translate.get('ROOT.yes').subscribe(function (l) {
          _this2.yes = l;
        });
        this.translate.get('ROOT.delete_failed').subscribe(function (l) {
          _this2.failedDel = l;
        });
        this.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
          _this2.sure = l;
        });
        this.translate.get('ROOT.confirmation').subscribe(function (l) {
          _this2.confirmation = l;
        });
        this.translate.get('ROOT.delete_success').subscribe(function (l) {
          _this2.successDel = l;
        });
        this.translate.get('CONTENT.have-required-data').subscribe(function (l) {
          _this2.have_required_data = l;
        });
        this.translate.get('CONTENT.data-failed').subscribe(function (l) {
          _this2.dataFailedSave = l;
        });
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translate.setDefaultLang(res.lang);

          _this2.translate.get('ROOT.no').subscribe(function (l) {
            _this2.no = l;
          });

          _this2.translate.get('ROOT.yes').subscribe(function (l) {
            _this2.yes = l;
          });

          _this2.translate.get('ROOT.delete_failed').subscribe(function (l) {
            _this2.failedDel = l;
          });

          _this2.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
            _this2.sure = l;
          });

          _this2.translate.get('ROOT.confirmation').subscribe(function (l) {
            _this2.confirmation = l;
          });

          _this2.translate.get('ROOT.delete_success').subscribe(function (l) {
            _this2.successDel = l;
          });

          _this2.translate.get('CONTENT.have-required-data').subscribe(function (l) {
            _this2.have_required_data = l;
          });

          _this2.translate.get('CONTENT.data-failed').subscribe(function (l) {
            _this2.dataFailedSave = l;
          });
        });
        this.arrayAll = [];
        this.lastArray = [];
        this.checkedList = [];
        this.checkedBoxId = [];
        this.MyArrayType = [];
        this.radioList = [];
        this.textList = [];
        this.scalaLinearList = [];
        this.paragraphTextList = [];
        this.checkedBoxIdWithoudId = [];
        this.dateList = [];
        this.timeList = [];
        this.radioButtonValues = [];
        this.questionData = [];
        this.isTextRequired = true;
        this.loadingQuestion = false;
        this.form = fb.group({
          question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
          answer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
          participant_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
        this.questionData.forEach(function (question) {
          _this2.form.addControl(question.id, fb.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required));
        });
      }

      _createClass(QuestionnaireDataParticipantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
          this.userService.getParticipantDetailData(this.userProfile.email).subscribe(function (res) {
            _this3.participantId = res.participant_id;

            _this3.userService.getStatusQuestionnaireData("participant_id=".concat(_this3.participantId)).subscribe(function (res) {
              if (res.status == 1) {
                _this3.router.navigate(['/', 'home']);
              }
            }, function (reason) {
              _this3.router.navigate(['/', 'home']);
            });
          });
          this.loadQuestionData();
          this.loadQuestionnaireData();
        }
      }, {
        key: "loadQuestionnaireData",
        value: function loadQuestionnaireData() {
          var _this4 = this;

          this.userService.getActiveQuestionnaireData("type=registration").subscribe(function (res) {
            _this4.questionnaireName = res.data[0].name;
            _this4.questionnaireDesc = res.data[0].description;
          });
        }
      }, {
        key: "loadQuestionData",
        value: function loadQuestionData() {
          var _this5 = this;

          this.loadtableQuestionData = true;
          this.userService.getActiveQuestionnaireData("type=registration").subscribe(function (res) {
            _this5.questionnaireId = res.data[0].id;

            _this5.chartService.getQuestionData("questionare_id=".concat(_this5.questionnaireId, "&active_status=true")).subscribe(function (res) {
              setTimeout(function () {
                _this5.questionData = res;
                _this5.loadtableQuestionData = false;
              }, 3000);
            }, function (err) {
              _this5.loadtableQuestionData = false;
            });
          });
        } // loadAnswerData() {
        //   this.userService.getActiveQuestionnaireData(`type=registration`).subscribe(res => {
        //     this.questionnaireId = res.data[0].id;
        //     this.chartService.getQuestionData(`questionare_id=${this.questionnaireId}&active_status=true`).subscribe(res => {
        //       this.arrayCheck = res;
        //       for (let i = 0; i < this.arrayCheck.length; i++) {
        //         this.questionId = this.arrayCheck[i].id;
        //         this.chartService.getAnswerOptionData(this.questionId).subscribe(result => {
        //           setTimeout(() => {
        //             this.answerData = result;
        //             this.dtTrigger2.next();
        //           }, 3000);
        //         }, err => {
        //           this.loadtableAnswerData = false;
        //         });
        //       }
        //     });
        //   });
        // }

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
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(option, event) {
          var _this6 = this;

          var dataCheck = {
            id: option.id
          };
          var data = {
            question_id: option.question_id,
            answer_list: '',
            notes: null
          };

          if (event.target.checked) {
            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option.question_id;
              });

              if (questionId !== undefined) {
                this.arrayAll.forEach(function (v) {
                  if (v.question_id === option.question_id) v.answer_list.push(dataCheck);
                });
              } else {
                this.checkedBoxId = [];
                this.checkedBoxId.push(dataCheck);
                var question = Object.assign({}, data, {
                  answer_list: this.checkedBoxId
                });
                this.arrayAll.push(question);
              }
            } else {
              this.checkedBoxId.push(dataCheck);

              var _question = Object.assign({}, data, {
                answer_list: this.checkedBoxId
              });

              this.arrayAll.push(_question);
            }
          } else {
            if (this.arrayAll.length > 0) {
              var check_question_id = this.arrayAll.find(function (x) {
                return x.question_id === option.question_id;
              });

              if (check_question_id !== undefined) {
                if (this.checkedBoxId.length !== 0) {
                  this.arrayAll.forEach(function (v) {
                    if (v.question_id === option.question_id) {
                      v.answer_list = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](v.answer_list, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](v.answer_list, {
                        id: option.id
                      }));

                      if (v.answer_list.length === 0) {
                        _this6.arrayAll = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](_this6.arrayAll, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](_this6.arrayAll, {
                          question_id: option.question_id
                        }));
                      }
                    }

                    ;
                  });
                }
              }
            }
          }
        }
      }, {
        key: "onRadioButtonChange",
        value: function onRadioButtonChange(option, event) {
          if (event.target.checked) {
            this.radioList = [];
            var data = {
              question_id: option.question_id,
              answer_list: [{
                id: option.id
              }],
              notes: null
            };

            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option.question_id;
              });

              if (questionId !== undefined) {
                this.arrayAll.forEach(function (v) {
                  if (v.question_id === option.question_id) v.answer_list = [{
                    id: option.id
                  }];
                });
              } else {
                this.arrayAll.push(data);
              }
            } else {
              this.arrayAll.push(data);
            }
          }
        }
      }, {
        key: "onDropdownSelected",
        value: function onDropdownSelected(event, option) {
          if (event.target.value) {
            var data = {
              question_id: option[0].question_id,
              answer_list: [{
                id: parseInt(event.target.value)
              }],
              notes: null
            };

            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option[0].question_id;
              });

              if (questionId !== undefined) {
                this.arrayAll.push(data);
                this.arrayAll = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](this.arrayAll, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](this.arrayAll, {
                  question_id: option[0].question_id
                }));
              } else {
                this.arrayAll.push(data);
              }
            } else {
              this.arrayAll.push(data);
            }
          }
        }
      }, {
        key: "onText",
        value: function onText(option, event) {
          var textValue = event.target.value;

          if (textValue !== '') {
            this.isTextRequired = false;
            var data = {
              question_id: option,
              answer_list: null,
              notes: textValue
            };

            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option;
              });

              if (questionId !== undefined) {
                this.arrayAll.forEach(function (v) {
                  if (v.question_id === option) v.notes = event.target.value;
                });
              } else {
                this.arrayAll.push(data);
              }
            } else {
              this.arrayAll.push(data);
            }
          } else {
            if (this.arrayAll.length > 0) {
              var check_question_id = this.arrayAll.find(function (x) {
                return x.question_id === option;
              });

              if (check_question_id !== undefined) {
                this.arrayAll = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](this.arrayAll, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](this.arrayAll, {
                  question_id: option
                }));
              }
            }
          }
        }
      }, {
        key: "onParagraphText",
        value: function onParagraphText(option, event) {
          var parValue = event.target.value;

          if (parValue !== '') {
            var dataPar = {
              question_id: option,
              answer_list: null,
              notes: parValue
            };

            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option;
              });

              if (questionId !== undefined) {
                this.arrayAll.forEach(function (v) {
                  if (v.question_id === option) v.notes = event.target.value;
                });
              } else {
                this.arrayAll.push(dataPar);
              }
            } else {
              this.arrayAll.push(dataPar);
            }
          } else {
            if (this.arrayAll.length > 0) {
              var check_question_id = this.arrayAll.find(function (x) {
                return x.question_id === option;
              });

              if (check_question_id !== undefined) {
                this.arrayAll = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](this.arrayAll, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](this.arrayAll, {
                  question_id: option
                }));
              }
            }
          }
        }
      }, {
        key: "onDate",
        value: function onDate(option, event) {
          var textValue = event.target.value;

          if (textValue !== '') {
            var data = {
              question_id: option,
              answer_list: null,
              notes: textValue
            };

            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option;
              });

              if (questionId !== undefined) {
                this.arrayAll.forEach(function (v) {
                  if (v.question_id === option) v.notes = event.target.value;
                });
              } else {
                this.arrayAll.push(data);
              }
            } else {
              this.arrayAll.push(data);
            }
          } else {
            if (this.arrayAll.length > 0) {
              var check_question_id = this.arrayAll.find(function (x) {
                return x.question_id === option;
              });

              if (check_question_id !== undefined) {
                this.arrayAll = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](this.arrayAll, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](this.arrayAll, {
                  question_id: option
                }));
              }
            }
          }
        }
      }, {
        key: "changeLinear",
        value: function changeLinear(option, event) {
          var linearValue = event.target.value;
          var data = {
            question_id: option,
            answer_list: null,
            notes: linearValue
          };

          if (this.arrayAll.length != 0) {
            var questionId = this.arrayAll.find(function (x) {
              return x.question_id == option;
            });

            if (questionId !== undefined) {
              this.arrayAll.forEach(function (v) {
                if (v.question_id === option) v.notes = event.target.value;
              });
            } else {
              this.arrayAll.push(data);
            }
          } else {
            this.arrayAll.push(data);
          }
        }
      }, {
        key: "onTime",
        value: function onTime(option, event) {
          var textValue = event.target.value;

          if (textValue !== '') {
            var data = {
              question_id: option,
              answer_list: null,
              notes: textValue
            };

            if (this.arrayAll.length != 0) {
              var questionId = this.arrayAll.find(function (x) {
                return x.question_id == option;
              });

              if (questionId !== undefined) {
                this.arrayAll.forEach(function (v) {
                  if (v.question_id === option) v.notes = event.target.value;
                });
              } else {
                this.arrayAll.push(data);
              }
            } else {
              this.arrayAll.push(data);
            }
          } else {
            if (this.arrayAll.length > 0) {
              var check_question_id = this.arrayAll.find(function (x) {
                return x.question_id === option;
              });

              if (check_question_id !== undefined) {
                this.arrayAll = underscore__WEBPACK_IMPORTED_MODULE_10__["without"](this.arrayAll, underscore__WEBPACK_IMPORTED_MODULE_10__["findWhere"](this.arrayAll, {
                  question_id: option
                }));
              }
            }
          }
        }
      }, {
        key: "sendQuistionnaire",
        value: function sendQuistionnaire() {
          var _this7 = this;

          this.loadingQuestion = true;
          this.chartService.getQuestionData("questionare_id=".concat(this.questionnaireId, "&active_status=true")).subscribe(function (res) {
            var dataQuestion = res;

            if (dataQuestion.length !== 0) {
              if (_this7.arrayAll.length !== 0) {
                if (_this7.arrayAll.length == dataQuestion.length) {
                  _this7.userProfile = JSON.parse(localStorage.getItem('userProfile'));

                  if (_this7.userProfile.email !== undefined) {
                    _this7.userService.getParticipantDetailData(_this7.userProfile.email).subscribe(function (res) {
                      _this7.participantId = res.participant_id;
                      var myJson = JSON.stringify(_this7.arrayAll);
                      var payload = {
                        json: myJson,
                        participant_id: _this7.participantId
                      };

                      _this7.userService.postAnswerQuistionnaire(payload).subscribe(function (result) {
                        if (result.status == 'Success') {
                          _this7.loadingQuestion = false;

                          _this7.loadSuccess();

                          _this7.submitModal.show();
                        } else {
                          _this7.loadError();

                          _this7.loadingQuestion = false;
                        }
                      }, function (reason) {
                        _this7.broadcasterService.notifBroadcast(true, {
                          title: 'Gagal',
                          msg: reason.error.message,
                          timeout: 5000,
                          theme: 'default',
                          position: 'top-right',
                          type: 'error'
                        });
                      });
                    });
                  }
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: _this7.dataFailedSave,
                    text: _this7.have_required_data,
                    type: 'error',
                    showCancelButton: false,
                    showConfirmButton: true,
                    allowOutsideClick: false
                  });
                  _this7.loadingQuestion = false;
                }
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                  title: _this7.dataFailedSave,
                  text: _this7.have_required_data,
                  type: 'error',
                  showCancelButton: false,
                  showConfirmButton: true,
                  allowOutsideClick: false
                });
                _this7.loadingQuestion = false;
              }
            }
          });
        }
      }, {
        key: "gotoRegistration",
        value: function gotoRegistration() {
          window.location.href = 'new-registration';
        }
      }]);

      return QuestionnaireDataParticipantComponent;
    }();

    QuestionnaireDataParticipantComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])], QuestionnaireDataParticipantComponent.prototype, "dtElement1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])], QuestionnaireDataParticipantComponent.prototype, "dtElement2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionnaireDataParticipantComponent.prototype, "submitModal", void 0);
    QuestionnaireDataParticipantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire-data-participant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire-data-participant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire-data-participant.component.scss */
      "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], QuestionnaireDataParticipantComponent);
    /***/
  },

  /***/
  "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: QuestionnaireDataParticipantModule */

  /***/
  function srcAppThemeQuestionnaireDataParticipantQuestionnaireDataParticipantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireDataParticipantModule", function () {
      return QuestionnaireDataParticipantModule;
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


    var _questionnaire_data_participant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./questionnaire-data-participant.component */
    "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.component.ts");
    /* harmony import */


    var _questionnaire_data_participant_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./questionnaire-data-participant-routing.module */
    "./src/app/theme/questionnaire-data-participant/questionnaire-data-participant-routing.module.ts");
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

    var QuestionnaireDataParticipantModule = function QuestionnaireDataParticipantModule() {
      _classCallCheck(this, QuestionnaireDataParticipantModule);
    };

    QuestionnaireDataParticipantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_questionnaire_data_participant_component__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireDataParticipantComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _questionnaire_data_participant_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireDataParticipantRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_7__["ArchwizardModule"]]
    })], QuestionnaireDataParticipantModule);
    /***/
  }
}]);
//# sourceMappingURL=theme-questionnaire-data-participant-questionnaire-data-participant-module-es5.js.map