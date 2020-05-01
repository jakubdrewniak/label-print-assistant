function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./printing-board/printing-board.component */
    "./src/app/printing-board/printing-board.component.ts");

    var routes = [{
      path: '**',
      component: _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_2__["PrintingBoardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'label-print-assistant';
      }

      _createClass(AppComponent, [{
        key: "onFileDragOrDrop",
        value: function onFileDragOrDrop(e) {
          if (e && e.target.tagName !== 'INPUT') {
            e.preventDefault();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function AppComponent_dragover_HostBindingHandler($event) {
            return ctx.onFileDragOrDrop($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("drop", function AppComponent_drop_HostBindingHandler($event) {
            return ctx.onFileDragOrDrop($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        onFileDragOrDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:dragover', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:drop', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./printing-board/printing-board.component */
    "./src/app/printing-board/printing-board.component.ts");
    /* harmony import */


    var _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./printing-board/auxiliary/fileReader */
    "./src/app/printing-board/auxiliary/fileReader.ts");
    /* harmony import */


    var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-pdfjs-viewer */
    "./node_modules/ng2-pdfjs-viewer/__ivy_ngcc__/index.js");
    /* harmony import */


    var _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pdf-slot/pdf-slot.component */
    "./src/app/pdf-slot/pdf-slot.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_5__["PdfFileReader"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfJsViewerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_4__["PrintingBoardComponent"], _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_7__["PdfSlotComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfJsViewerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_4__["PrintingBoardComponent"], _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_7__["PdfSlotComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfJsViewerModule"]],
          providers: [_printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_5__["PdfFileReader"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/file-slot.ts":
  /*!*************************************!*\
    !*** ./src/app/models/file-slot.ts ***!
    \*************************************/

  /*! exports provided: FileStatus */

  /***/
  function srcAppModelsFileSlotTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileStatus", function () {
      return FileStatus;
    });

    var FileStatus;

    (function (FileStatus) {
      FileStatus["empty"] = "empty";
      FileStatus["loading"] = "loading";
      FileStatus["ready"] = "ready";
    })(FileStatus || (FileStatus = {}));
    /***/

  },

  /***/
  "./src/app/pdf-slot/pdf-slot.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pdf-slot/pdf-slot.component.ts ***!
    \************************************************/

  /*! exports provided: PdfSlotComponent */

  /***/
  function srcAppPdfSlotPdfSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfSlotComponent", function () {
      return PdfSlotComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_file_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/file-slot */
    "./src/app/models/file-slot.ts");
    /* harmony import */


    var _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../printing-board/auxiliary/fileReader */
    "./src/app/printing-board/auxiliary/fileReader.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-pdfjs-viewer */
    "./node_modules/ng2-pdfjs-viewer/__ivy_ngcc__/index.js");

    var _c0 = ["viewer"];

    function PdfSlotComponent_label_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PdfSlotComponent_label_0_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.fileChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PdfSlotComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng2-pdfjs-viewer", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDocumentLoad", function PdfSlotComponent_div_1_Template_ng2_pdfjs_viewer_onDocumentLoad_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.pdfLoaded($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PdfSlotComponent_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.removeFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pdfSrc", ctx_r1.loadedFile)("viewerId", ctx_r1.slot.id);
      }
    }

    var PdfSlotComponent = /*#__PURE__*/function () {
      function PdfSlotComponent(pdfFileReader) {
        _classCallCheck(this, PdfSlotComponent);

        this.pdfFileReader = pdfFileReader;
      }

      _createClass(PdfSlotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fileChanged",
        value: function fileChanged(e) {
          var _this = this;

          this.slot.status = _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].loading;
          var file = e.target.files[0];
          this.pdfFileReader.pdfFileReader.readAsArrayBuffer(file);

          this.pdfFileReader.pdfFileReader.onloadend = function (e) {
            var result = _this.pdfFileReader.pdfFileReader.result;
            var uint = new Uint8Array(result);
            _this.loadedFile = uint;
          };
        }
      }, {
        key: "pdfLoaded",
        value: function pdfLoaded($event) {
          this.slot.status = _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].ready;
          var pdfPage = this.pdfAppComponent.PDFViewerApplication.appConfig.mainContainer.querySelector('.pdfViewer').querySelector('.page');
          pdfPage.style.margin = 0;
          pdfPage.style.border = 'none';
        }
      }, {
        key: "removeFile",
        value: function removeFile() {
          this.loadedFile = null;
          this.slot.status = _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].empty;
        }
      }]);

      return PdfSlotComponent;
    }();

    PdfSlotComponent.ɵfac = function PdfSlotComponent_Factory(t) {
      return new (t || PdfSlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_2__["PdfFileReader"]));
    };

    PdfSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PdfSlotComponent,
      selectors: [["app-pdf-slot"]],
      viewQuery: function PdfSlotComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfAppComponent = _t.first);
        }
      },
      inputs: {
        slot: "slot"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "add-file__wrapper", 4, "ngIf"], ["class", "viewer-wrapper", 4, "ngIf"], [1, "add-file__wrapper"], ["type", "file", 3, "change"], [1, "viewer-wrapper"], ["zoom", "98", 3, "pdfSrc", "viewerId", "onDocumentLoad"], ["viewer", ""], [1, "remove-file", 3, "click"]],
      template: function PdfSlotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PdfSlotComponent_label_0_Template, 2, 0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PdfSlotComponent_div_1_Template, 5, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadedFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedFile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfJsViewerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.add-file__wrapper[_ngcontent-%COMP%] {\n  background-color: #2f2fa2;\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.add-file__wrapper[_ngcontent-%COMP%]:hover {\n  background-color: #242583;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.viewer-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  position: relative;\n}\n\n.remove-file[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background-color: red;\n  font-size: 24px;\n  color: white;\n  line-height: 32px;\n  width: 32px;\n  text-align: center;\n  border-radius: 50%;\n  cursor: pointer;\n  border: none;\n  pointer-events: auto;\n}\n\n@media print {\n  .remove-file[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2xhYmVsLXByaW50LWFzc2lzdGFudC9sYWJlbC1wcmludC1hc3Npc3RhbnQvc3JjL2FwcC9wZGYtc2xvdC9wZGYtc2xvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGRmLXNsb3QvcGRmLXNsb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0UseUJBQUE7QUNFSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxhQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BkZi1zbG90L3BkZi1zbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGQtZmlsZV9fd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJmYTI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1ODM7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aWV3ZXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yZW1vdmUtZmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAucmVtb3ZlLWZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLWZpbGVfX3dyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZmEyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFkZC1maWxlX193cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjU4Mztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnZpZXdlci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlbW92ZS1maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5yZW1vdmUtZmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfSlotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pdf-slot',
          templateUrl: './pdf-slot.component.html',
          styleUrls: ['./pdf-slot.component.scss']
        }]
      }], function () {
        return [{
          type: _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_2__["PdfFileReader"]
        }];
      }, {
        pdfAppComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['viewer']
        }],
        slot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/printing-board/auxiliary/fileReader.ts":
  /*!********************************************************!*\
    !*** ./src/app/printing-board/auxiliary/fileReader.ts ***!
    \********************************************************/

  /*! exports provided: PdfFileReader */

  /***/
  function srcAppPrintingBoardAuxiliaryFileReaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfFileReader", function () {
      return PdfFileReader;
    });

    var PdfFileReader = function PdfFileReader() {
      _classCallCheck(this, PdfFileReader);

      this.pdfFileReader = new FileReader();
    };
    /***/

  },

  /***/
  "./src/app/printing-board/printing-board.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/printing-board/printing-board.component.ts ***!
    \************************************************************/

  /*! exports provided: PrintingBoardComponent */

  /***/
  function srcAppPrintingBoardPrintingBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintingBoardComponent", function () {
      return PrintingBoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_file_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/file-slot */
    "./src/app/models/file-slot.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pdf-slot/pdf-slot.component */
    "./src/app/pdf-slot/pdf-slot.component.ts");

    function PrintingBoardComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pdf-slot", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slot_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slot", slot_r1);
      }
    }

    var PrintingBoardComponent = /*#__PURE__*/function () {
      function PrintingBoardComponent() {
        _classCallCheck(this, PrintingBoardComponent);
      }

      _createClass(PrintingBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.availableSlots = [{
            id: 'id1',
            status: _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].empty
          }, {
            id: 'id2',
            status: _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].empty
          }, {
            id: 'id3',
            status: _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].empty
          }, {
            id: 'id4',
            status: _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].empty
          }];
        }
      }, {
        key: "printBoard",
        value: function printBoard() {
          window.print();
        }
      }, {
        key: "fileIsLoading",
        value: function fileIsLoading() {
          return !!this.availableSlots.find(function (s) {
            return s.status === _models_file_slot__WEBPACK_IMPORTED_MODULE_1__["FileStatus"].loading;
          });
        }
      }]);

      return PrintingBoardComponent;
    }();

    PrintingBoardComponent.ɵfac = function PrintingBoardComponent_Factory(t) {
      return new (t || PrintingBoardComponent)();
    };

    PrintingBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrintingBoardComponent,
      selectors: [["app-printing-board"]],
      decls: 5,
      vars: 2,
      consts: [[1, "button-wrapper"], [3, "disabled", "click"], [1, "board-wrapper"], ["class", "quarter", 4, "ngFor", "ngForOf"], [1, "quarter"], [3, "slot"]],
      template: function PrintingBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintingBoardComponent_Template_button_click_1_listener() {
            return ctx.printBoard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrintingBoardComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.fileIsLoading());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableSlots);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_3__["PdfSlotComponent"]],
      styles: [".button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 64px;\n  margin: 32px 0 8px 0;\n  cursor: pointer;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n\n.button-wrapper[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%] {\n  width: calc(80vh * 0.71);\n  margin: auto;\n}\n\n.board-wrapper[_ngcontent-%COMP%] {\n  height: 80vh;\n  padding: 32px calc(32px * 0.71);\n  border: 1px solid #000;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50% 50%;\n}\n\n.quarter[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n@media print {\n  button[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .board-wrapper[_ngcontent-%COMP%] {\n    height: 1121px;\n    width: 794px;\n    padding: 0;\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2xhYmVsLXByaW50LWFzc2lzdGFudC9sYWJlbC1wcmludC1hc3Npc3RhbnQvc3JjL2FwcC9wcmludGluZy1ib2FyZC9wcmludGluZy1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJpbnRpbmctYm9hcmQvcHJpbnRpbmctYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQUU7RUFDRSxtQkFBQTtBQ0VKOztBREVBOztFQUVFLHdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0FGOztFREVBO0lBQ0UsY0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmludGluZy1ib2FyZC9wcmludGluZy1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5idXR0b24td3JhcHBlciBidXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiA2NHB4O1xuICBtYXJnaW46IDMycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi5idXR0b24td3JhcHBlcixcbi5ib2FyZC13cmFwcGVyIHtcbiAgd2lkdGg6IGNhbGMoODB2aCAqIDAuNzEpO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ib2FyZC13cmFwcGVyIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiAzMnB4IGNhbGMoMzJweCAqIDAuNzEpO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xufVxuXG4ucXVhcnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYm9hcmQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMTIxcHg7XG4gICAgd2lkdGg6IDc5NHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG4iLCIuYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogNjRweDtcbiAgbWFyZ2luOiAzMnB4IDAgOHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24td3JhcHBlciBidXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIsXG4uYm9hcmQtd3JhcHBlciB7XG4gIHdpZHRoOiBjYWxjKDgwdmggKiAwLjcxKTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMzJweCBjYWxjKDMycHggKiAwLjcxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XG59XG5cbi5xdWFydGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJvYXJkLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTEyMXB4O1xuICAgIHdpZHRoOiA3OTRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintingBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-printing-board',
          templateUrl: './printing-board.component.html',
          styleUrls: ['./printing-board.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/label-print-assistant/label-print-assistant/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map