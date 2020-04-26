(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printing-board/printing-board.component */ "./src/app/printing-board/printing-board.component.ts");





const routes = [
    { path: '**', component: _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_2__["PrintingBoardComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'label-print-assistant';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./printing-board/printing-board.component */ "./src/app/printing-board/printing-board.component.ts");
/* harmony import */ var _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./printing-board/auxiliary/fileReader */ "./src/app/printing-board/auxiliary/fileReader.ts");
/* harmony import */ var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdfjs-viewer */ "./node_modules/ng2-pdfjs-viewer/__ivy_ngcc__/index.js");
/* harmony import */ var _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pdf-slot/pdf-slot.component */ "./src/app/pdf-slot/pdf-slot.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_5__["PdfFileReader"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfJsViewerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_4__["PrintingBoardComponent"],
        _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_7__["PdfSlotComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfJsViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _printing_board_printing_board_component__WEBPACK_IMPORTED_MODULE_4__["PrintingBoardComponent"],
                    _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_7__["PdfSlotComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfJsViewerModule"]
                ],
                providers: [
                    _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_5__["PdfFileReader"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pdf-slot/pdf-slot.component.ts":
/*!************************************************!*\
  !*** ./src/app/pdf-slot/pdf-slot.component.ts ***!
  \************************************************/
/*! exports provided: PdfSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfSlotComponent", function() { return PdfSlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printing-board/auxiliary/fileReader */ "./src/app/printing-board/auxiliary/fileReader.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-pdfjs-viewer */ "./node_modules/ng2-pdfjs-viewer/__ivy_ngcc__/index.js");





const _c0 = ["viewer"];
function PdfSlotComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PdfSlotComponent_label_0_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.fileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PdfSlotComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng2-pdfjs-viewer", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDocumentLoad", function PdfSlotComponent_div_1_Template_ng2_pdfjs_viewer_onDocumentLoad_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.pdfLoaded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pdfSrc", ctx_r1.loadedFile);
} }
class PdfSlotComponent {
    constructor(pdfFileReader) {
        this.pdfFileReader = pdfFileReader;
    }
    ngOnInit() {
    }
    fileChanged(e) {
        const file = e.target.files[0];
        this.pdfFileReader.pdfFileReader.readAsArrayBuffer(file);
        this.pdfFileReader.pdfFileReader.onloadend = (e) => {
            const result = this.pdfFileReader.pdfFileReader.result;
            const uint = new Uint8Array(result);
            this.loadedFile = uint;
        };
    }
    pdfLoaded($event) {
        const pdfPage = this.pdfAppComponent.PDFViewerApplication.appConfig.mainContainer
            .querySelector('.pdfViewer').querySelector('.page');
        pdfPage.style.margin = 0;
        pdfPage.style.border = 'none';
    }
}
PdfSlotComponent.ɵfac = function PdfSlotComponent_Factory(t) { return new (t || PdfSlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_1__["PdfFileReader"])); };
PdfSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfSlotComponent, selectors: [["app-pdf-slot"]], viewQuery: function PdfSlotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfAppComponent = _t.first);
    } }, inputs: { pdfId: "pdfId" }, decls: 2, vars: 2, consts: [["class", "add-file__wrapper", 4, "ngIf"], ["class", "viewer-wrapper", 4, "ngIf"], [1, "add-file__wrapper"], ["type", "file", 3, "change"], [1, "viewer-wrapper"], ["viewerId", "id1", "zoom", "98", 3, "pdfSrc", "onDocumentLoad"], ["viewer", ""]], template: function PdfSlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PdfSlotComponent_label_0_Template, 2, 0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PdfSlotComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedFile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfJsViewerComponent"]], styles: [".add-file__wrapper[_ngcontent-%COMP%] {\n  background-color: #2f2fa2;\n  cursor: pointer;\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.add-file__wrapper[_ngcontent-%COMP%]:hover {\n  background-color: #242583;\n}\n.add-file__wrapper[_ngcontent-%COMP%]:before {\n  content: \"+\";\n  font-size: 70px;\n  font-weight: 900;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.viewer-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2xhYmVsLXByaW50LWFzc2lzdGFudC9sYWJlbC1wcmludC1hc3Npc3RhbnQvc3JjL2FwcC9wZGYtc2xvdC9wZGYtc2xvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGRmLXNsb3QvcGRmLXNsb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FDRVI7QURFQTtFQUNJLGFBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BkZi1zbG90L3BkZi1zbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1maWxlX193cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZmEyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTgzXG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJysnO1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICB9XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlld2VyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiIsIi5hZGQtZmlsZV9fd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJmYTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hZGQtZmlsZV9fd3JhcHBlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI1ODM7XG59XG4uYWRkLWZpbGVfX3dyYXBwZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aWV3ZXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfSlotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pdf-slot',
                templateUrl: './pdf-slot.component.html',
                styleUrls: ['./pdf-slot.component.scss']
            }]
    }], function () { return [{ type: _printing_board_auxiliary_fileReader__WEBPACK_IMPORTED_MODULE_1__["PdfFileReader"] }]; }, { pdfAppComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['viewer']
        }], pdfId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/printing-board/auxiliary/fileReader.ts":
/*!********************************************************!*\
  !*** ./src/app/printing-board/auxiliary/fileReader.ts ***!
  \********************************************************/
/*! exports provided: PdfFileReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfFileReader", function() { return PdfFileReader; });
class PdfFileReader {
    constructor() {
        this.pdfFileReader = new FileReader();
    }
}


/***/ }),

/***/ "./src/app/printing-board/printing-board.component.ts":
/*!************************************************************!*\
  !*** ./src/app/printing-board/printing-board.component.ts ***!
  \************************************************************/
/*! exports provided: PrintingBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintingBoardComponent", function() { return PrintingBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pdf-slot/pdf-slot.component */ "./src/app/pdf-slot/pdf-slot.component.ts");




function PrintingBoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pdf-slot", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slotId_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pdfId", slotId_r1);
} }
class PrintingBoardComponent {
    constructor() {
        this.availableSlots = ['id1', 'id2', 'id3', 'id4'];
    }
    ngOnInit() {
    }
}
PrintingBoardComponent.ɵfac = function PrintingBoardComponent_Factory(t) { return new (t || PrintingBoardComponent)(); };
PrintingBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintingBoardComponent, selectors: [["app-printing-board"]], decls: 2, vars: 1, consts: [[1, "board-wrapper"], ["class", "quarter", 4, "ngFor", "ngForOf"], [1, "quarter"], [3, "pdfId"]], template: function PrintingBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintingBoardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableSlots);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _pdf_slot_pdf_slot_component__WEBPACK_IMPORTED_MODULE_2__["PdfSlotComponent"]], styles: [".board-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  height: 1123px;\n  width: 794px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50% 50%;\n}\n\n.quarter[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2xhYmVsLXByaW50LWFzc2lzdGFudC9sYWJlbC1wcmludC1hc3Npc3RhbnQvc3JjL2FwcC9wcmludGluZy1ib2FyZC9wcmludGluZy1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJpbnRpbmctYm9hcmQvcHJpbnRpbmctYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcHJpbnRpbmctYm9hcmQvcHJpbnRpbmctYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQtd3JhcHBlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBoZWlnaHQ6IDExMjNweDtcbiAgICB3aWR0aDogNzk0cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xufVxuXG4ucXVhcnRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cbiIsIi5ib2FyZC13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgaGVpZ2h0OiAxMTIzcHg7XG4gIHdpZHRoOiA3OTRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbn1cblxuLnF1YXJ0ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintingBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-printing-board',
                templateUrl: './printing-board.component.html',
                styleUrls: ['./printing-board.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/label-print-assistant/label-print-assistant/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map