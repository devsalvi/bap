(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-pages-module~builder-builder-module~components-material-material-module~components~c71440d4"],{

/***/ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js ***!
  \***************************************************************/
/*! exports provided: HighlightModule, HighlightJS, HighlightDirective, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightModule", function() { return HighlightModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightJS", function() { return HighlightJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return HighlightFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighlightJS = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function HighlightJS(options) {
        this.options = {
            theme: 'github',
            path: 'assets/lib/hljs',
            auto: true
        };
        this._isReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.options = Object.assign({}, this.options, options);
        if (typeof hljs !== 'undefined') {
            /** hljs is loaded by the user */
            hljs.configure(this.options.config);
            this._isReady$.next(true);
        }
        else {
            /** Load hljs script and style locally */
            this._loadScript();
            this._loadTheme();
        }
    }
    Object.defineProperty(HighlightJS.prototype, "isReady", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isReady$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (isReady) { return isReady; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} ignore_illegals
     * @param {?=} continuation
     * @return {?}
     */
    HighlightJS.prototype.highlight = function (name, value, ignore_illegals, continuation) {
        if (typeof hljs !== 'undefined') {
            return hljs.highlight(name, value, ignore_illegals, continuation);
        }
    };
    /**
     * @param {?} value
     * @param {?} languageSubset
     * @return {?}
     */
    HighlightJS.prototype.highlightAuto = function (value, languageSubset) {
        if (typeof hljs !== 'undefined') {
            return hljs.highlightAuto(value, languageSubset);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    HighlightJS.prototype.fixMarkup = function (value) {
        if (typeof hljs !== 'undefined') {
            return hljs.fixMarkup(value);
        }
    };
    /**
     * @param {?} block
     * @return {?}
     */
    HighlightJS.prototype.highlightBlock = function (block) {
        if (typeof hljs !== 'undefined') {
            hljs.highlightBlock(block);
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    HighlightJS.prototype.configure = function (options) {
        if (typeof hljs !== 'undefined') {
            hljs.configure(this.options.config);
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype.initHighlighting = function () {
        if (typeof hljs !== 'undefined') {
            hljs.initHighlighting();
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype.initHighlightingOnLoad = function () {
        if (typeof hljs !== 'undefined') {
            hljs.initHighlightingOnLoad();
        }
    };
    /**
     * @param {?} name
     * @param {?} language
     * @return {?}
     */
    HighlightJS.prototype.registerLanguage = function (name, language) {
        if (typeof hljs !== 'undefined') {
            hljs.registerLanguage(name, language);
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype.listLanguages = function () {
        if (typeof hljs !== 'undefined') {
            return hljs.listLanguages();
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    HighlightJS.prototype.getLanguage = function (name) {
        if (typeof hljs !== 'undefined') {
            return hljs.getLanguage(name);
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype._loadScript = function () {
        var _this = this;
        var /** @type {?} */ script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.onload = function () {
            hljs.configure(_this.options.config);
            _this._isReady$.next(true);
        };
        script.src = this.options.path + "/highlight.pack.js";
        document.head.appendChild(script);
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype._loadTheme = function () {
        var /** @type {?} */ style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = this.options.path + "/styles/" + this.options.theme + ".css";
        document.head.appendChild(style);
    };
    return HighlightJS;
}());
HighlightJS.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
HighlightJS.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [OPTIONS,] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * There are 2 ways to higlight a code
 *  1 - using the [code] input (default) <code highlight [code]="yourCode"></code>
 *  2 - using element text content <code> {{yourCode}} </code>
 */
var HighlightDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} hljs
     */
    function HighlightDirective(el, renderer, hljs) {
        this.renderer = renderer;
        this.hljs = hljs;
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.el = el.nativeElement;
    }
    Object.defineProperty(HighlightDirective.prototype, "setCode", {
        /**
         * @param {?} code
         * @return {?}
         */
        set: function (code) {
            var _this = this;
            this.code = code;
            this.hljs.isReady.subscribe(function () { return _this.highlightElement(_this.el, code); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HighlightDirective.prototype.ngOnInit = function () {
        var _this = this;
        /** Acitvate MutationObserver if `auto` option is true and `[code]` input is not used
             * This will highlight using the text content */
        if (!this.code && this.hljs.options.auto) {
            this.hljs.isReady.subscribe(function () {
                _this.highlightTextContent();
                /** Highlight when text content changes */
                _this.domObs = new MutationObserver(function () { return _this.highlightTextContent(); });
                _this.domObs.observe(_this.el, { childList: true, subtree: true });
            });
        }
    };
    /**
     * Highlight using element text content
     * @return {?}
     */
    HighlightDirective.prototype.highlightTextContent = function () {
        if (!this.highlight) {
            if (this.el.tagName.toLowerCase() === 'code') {
                this.highlightElement(this.el, this.el.innerText.trim());
            }
            else {
                console.warn("[HighlightDirective]: Use 'highlight' on <code> element only");
            }
        }
        else if (this.highlight === 'all') {
            this.highlightChildren(this.el, 'pre code');
        }
        else {
            this.highlightChildren(this.el, this.highlight);
        }
    };
    /**
     * Highlight a code block
     * @param {?} el
     * @param {?} code
     * @return {?}
     */
    HighlightDirective.prototype.highlightElement = function (el, code) {
        var /** @type {?} */ res = this.hljs.highlightAuto(code, this.language);
        if (res.value !== el.innerHTML) {
            this.renderer.addClass(el, 'hljs');
            this.renderer.setProperty(el, 'innerHTML', res.value);
            this.highlighted.emit(res);
        }
    };
    /**
     * Highlight multiple code blocks
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    HighlightDirective.prototype.highlightChildren = function (el, selector) {
        var _this = this;
        var /** @type {?} */ codeElements = el.querySelectorAll(selector);
        /** highlight children with the same selector */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(codeElements).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (code) { return code.childNodes.length === 1 && code.childNodes[0].nodeName === '#text'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (codeElement) { return _this.highlightElement(codeElement, codeElement.innerText.trim()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
    };
    /**
     * @return {?}
     */
    HighlightDirective.prototype.ngOnDestroy = function () {
        /** Disconnect MutationObserver */
        if (!this.code && this.hljs.options.auto) {
            this.domObs.disconnect();
        }
    };
    return HighlightDirective;
}());
HighlightDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[highlight]'
            },] },
];
/** @nocollapse */
HighlightDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: HighlightJS, },
]; };
HighlightDirective.propDecorators = {
    "highlight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "language": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "setCode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['code',] },],
    "highlighted": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function HighlightFactory(options) {
    return new HighlightJS(options);
}
var HighlightModule = /** @class */ (function () {
    function HighlightModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    HighlightModule.forRoot = function (options) {
        return {
            ngModule: HighlightModule,
            providers: [
                { provide: OPTIONS, useValue: options },
                {
                    provide: HighlightJS,
                    useFactory: HighlightFactory,
                    deps: [OPTIONS]
                }
            ]
        };
    };
    return HighlightModule;
}());
HighlightModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [HighlightDirective],
                exports: [HighlightDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-highlightjs.js.map


/***/ })

}]);
//# sourceMappingURL=app-content-pages-pages-module~builder-builder-module~components-material-material-module~components~c71440d4.js.map