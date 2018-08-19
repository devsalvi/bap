(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/content/pages/components/apps/mail/mail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/components/apps/mail/mail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n\t<b>Mail App:</b> - Coming soon in the following update.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/apps/mail/mail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/components/apps/mail/mail.component.ts ***!
  \**********************************************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailComponent = /** @class */ (function () {
    function MailComponent() {
    }
    MailComponent.prototype.ngOnInit = function () { };
    MailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-mail',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/content/pages/components/apps/mail/mail.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/apps/mail/mail.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/components/apps/mail/mail.module.ts ***!
  \*******************************************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.component */ "./src/app/content/pages/components/apps/mail/mail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _mail_component__WEBPACK_IMPORTED_MODULE_2__["MailComponent"]
                    }
                ])
            ],
            declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_2__["MailComponent"]]
        })
    ], MailModule);
    return MailModule;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/modal/modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleScrollingLongContent\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Scrollable long content</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-brand\" (click)=\"open(content5)\">Start</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/modal/modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgbdModalContentComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContentComponent", function() { return NgbdModalContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var scrollingLongContent = {
    beforeCodeTitle: 'Create your profile',
    htmlCode: "",
    tsCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var NgbdModalContentComponent = /** @class */ (function () {
    function NgbdModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContentComponent.prototype, "name", void 0);
    NgbdModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContentComponent);
    return NgbdModalContentComponent;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.open2 = function () {
        var modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.name = 'World';
    };
    ModalComponent.prototype.open3 = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent.prototype.openLarge = function (content) {
        this.modalService.open(content, {
            size: 'lg'
        });
    };
    ModalComponent.prototype.openSmall = function (content) {
        this.modalService.open(content, {
            size: 'sm'
        });
    };
    ModalComponent.prototype.openCentred = function (content) {
        this.modalService.open(content);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.exampleScrollingLongContent = scrollingLongContent;
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map