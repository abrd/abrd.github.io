(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" style=\"position:relative;\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer style=\"text-align:center\"></app-footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ABRD';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _features_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/routes */ "./src/app/features/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_features_routes__WEBPACK_IMPORTED_MODULE_7__["routes"], {
                    useHash: true,
                    enableTracing: false
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_6__["FeaturesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/about/about.component.css":
/*!****************************************************!*\
  !*** ./src/app/features/about/about.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/about/about.component.html":
/*!*****************************************************!*\
  !*** ./src/app/features/about/about.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Agile Business Rule Methodology is based on hundred of consulting engagements at ILOG Inc and then IBM and the following <a href=\"http://www.springer.com/business+%26+management/business+information+systems/book/978-3-642-19040-7\">book</a>. The content is product agnostic and support incremental and iterative development for decision services. It starts from a business operation improvement idea that is assessed versus of set of criteria to validate the fit to use a Business Rule Management System, and addresses all the project implementation phases.\n\n<h3>Background</h3>\nABRD was developed by Jerome Boyer at ILOG to support implementation and deployment of BRMS by its customers and professional services. It was hundred of deployments world wide for different industry. The polytechnic school of Singapore is using it in its curriculum. It is now offered as a free open source methodology as part of the Eclipse Process Framework plug-in library.\n\n<h3>Authors</h3>\n<ul>\n  <li>Jerome Boyer: Senior Technical Staff Member at IBM - Hybrid Cloud Solution Engineering</li>\n  <li>Pierre Berlandier: Senior Technical Staff Member at IBM - ODM.</li>\n  <li>Hafedh Mili: Professor in Computer Science at the University of Montreal - Canada</li>\n</ul>\n\n\n<img src=\"assets/images/abrd-book.png\"/>\n"

/***/ }),

/***/ "./src/app/features/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/features/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/features/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/features/bestpractices/bestpractices.component.css":
/*!********************************************************************!*\
  !*** ./src/app/features/bestpractices/bestpractices.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/bestpractices/bestpractices.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/features/bestpractices/bestpractices.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Best Practices</h4>\n\n<div id=\"datamodel\">\n  <markdown path=\"assets/concepts/diff-data-model.md\"></markdown>\n</div>\n"

/***/ }),

/***/ "./src/app/features/bestpractices/bestpractices.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/bestpractices/bestpractices.component.ts ***!
  \*******************************************************************/
/*! exports provided: BestPracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPracticesComponent", function() { return BestPracticesComponent; });
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

var BestPracticesComponent = /** @class */ (function () {
    function BestPracticesComponent() {
    }
    BestPracticesComponent.prototype.ngOnInit = function () {
    };
    BestPracticesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bestpractices',
            template: __webpack_require__(/*! ./bestpractices.component.html */ "./src/app/features/bestpractices/bestpractices.component.html"),
            styles: [__webpack_require__(/*! ./bestpractices.component.css */ "./src/app/features/bestpractices/bestpractices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BestPracticesComponent);
    return BestPracticesComponent;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/features/about/about.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/features/tasks/tasks.component.ts");
/* harmony import */ var _bestpractices_bestpractices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bestpractices/bestpractices.component */ "./src/app/features/bestpractices/bestpractices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_1__["NgxMdModule"].forRoot(),
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _bestpractices_bestpractices_component__WEBPACK_IMPORTED_MODULE_7__["BestPracticesComponent"]],
            exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]]
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/features/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2> Agile Business Rule Development Method</h2>\n<p>\nThis project delivers, as open source, the content for the Agile Business Rule Methodology used to develop decision management application and based on hundred of consulting engagements at ILOG Inc and then IBM and the following <a href=\"http://www.springer.com/business+%26+management/business+information+systems/book/978-3-642-19040-7\">book</a>. The content is product agnostic and support incremental and iterative development for decision services. It starts from a business operation improvement idea that is assessed versus of set of criteria to validate fit to use a Business Rule Management System, and addresses all the project implementation phases.\n\n<a (click)=\"openDialog('Decision Management System','assets/concepts/brms.md')\">Decision Management System</a> involves a combination of components that support the definition, change and execution of an organization's <a (click)=\"openDialog('Business Rule','assets/concepts/br.md')\">business rules</a>  -based decision services. Introducing BRMS in an enterprise will reduce application maintenance costs, enable more accurate and consistent business policy implementation across applications, and improve collaboration between <a (click)=\"openDialog('Rule analyst','assets/concepts/rule-analyst.md')\">business analysts</a> and IT departments. BRMS is the term used in the methodology as it covers business rule management, as oppose to a product name that may change over time.\nThe goal of the Agile Business Rule Development (ABRD) method is to provide a repeatable development process for decision-centric projects.\n</p>\n<h3>Goals</h3>\nABRD applies the agile manifesto to efficiently implement business policies as executable rules. The goal is not having a team spending month to document thousand of rules, where those rules can be implemented, executed, tested in less time as soon as the first day of analysis. Specifically the goals are\n<ul>\n<li>Separate rules as a manageable artifact using discovery, analysis and authoring activities and work products</li>\n<li> Trace rules during their full life cycle from requirement to deployment and maintenance</li>\n<li> Link rules to business context and motivation</li>\n<li> Develop the rule description using business terms and high level rule language</li>\n<li> Prepare the fact model for the rule implementation</li>\n<li> Prepare the rule set implementation and deployment as decision services in a Service Oriented Architecture or as Micro Services executed by a <a (click)=\"openDialog('Rule Engine','assets/concepts/ruleengine.md')\">rule engine</a></li>\n<li> Articulate the rule governance processes</li>\n</ul>\n<h3>How to Adopt ABRD</h3>\nBRMS enable managing business rule as a standalone artifact, owned by the business user, and maintainable over time into production system. The implementation of a business rule application follows some activities and tasks that are slightly different than traditional software development life cycle. The integration of one or more business analysts as part of the development team is also less traditional. Finally the core value of such technology is to be able to have business user maintaining the business rules in production with a minimum involvement of IT. Technology is one side of the coin, methodology and best practices is the other.\n\nA Project Management Office can leverage ABRD as-is or integrate it as content for their own methodology.\n\nIf the team is new to business rule application, it is best to start with a small rule set and incrementally add rules and best practices over time. The team has to integrate the rule discovery and analysis activities in their own project plan.\n\nPrototyping or Minimum Viable Product is a major approach, as it shows to the team concrete execution, and helps to drive issues, and requirements around business rules and even business process.\n\n<h4>Common Pitfalls</h4>\nThe most common pitfalls in implementing business rules application include:\n<ul>\n<li>Starting by harvesting all the rules in a document without any implementation</li>\n<li>Ignoring the importance of the data model</li>\n<li>Not understanding where the rules are (should be) enforced</li>\n<li>Mixing the data model from the implementation point of view, with the domain model that is used by the business</li>\n<li>Involving IT only: never forget the business, involve them as early as possible and make them take ownership of the rules.</li>\n<li>Outsourcing business rule implementation: business rules are enterprise assets.</li>\n<li>Forgetting to test the rules outside of the application</li>\n<li>Not involving the business in the rule validation process</li>\n<li>Badly designing a rule set, by not applying standard design pattern as separation of concerns.</li>\n</ul>\n<h3>Incremental Development</h3>\nThe following diagram illustrates how a decision service implementation is built from a business idea to an executable SOA service integrated with a BPM system or any consumers.\n<img src=\"assets/images/ABRD-phase-tools.png\" alt=\"Phases\" style=\"width: 90%;\"/>\n<p>\nWithin those phases we can find project activities that are executed multiple times during each phase:\n</p>\n<ul>\n<li>Rule discovery</li>\n<li>Rule analysis</li>\n<li>Fact model implementation</li>\n<li>Rule implementation and unit test</li>\n<li>Rule validation</li>\n<li>Rule deployment</li>\n</ul>\n\n<p>\nLike all agile methodologies, ABRD prescribes an incremental development using time boxed iterations. However, in ABRD, the entire process lifecycle may not be followed for each iteration. Instead, a number of very short cycles between phases may occur, with the entire ruleset gradually evolving.\n</p>\n\n<h3>News</h3>\n<ul>\n<li>2017- Finally I'm moving ABRD content out of Eclipse Framework Composer library to an Angular App hosted on github and open source the content in <a href=\"http://github.com/abrd/abrd.github.io\">this github repository</a>. Aa part of this port, I am integrating deep update to content, some product specific guidances, and update with new micro-service architecture, complex event processing and lesson learnt since the last years.\n</li>\n</ul>\n<h3>How to use it?</h3>\nAs an open source your can fork the git repository from http://github.com/abrd/abrd.github.io and add your own content in the app/assets folder. If you want to contribute back use a pull request on the main abrd repository <a href=\"https://github.com/abrd/abrd.github.io/pulls\">pull request</a>.\n\nAs it is a night job it will take time... Stay tuned. Jerome.\n"

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/my-dialog/my-dialog.component */ "./src/app/shared/my-dialog/my-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openDialog = function (title, url) {
        var dialogRef = this.dialog.open(_shared_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MyDialogComponent"], {
            width: '1020px',
            data: { title: title, url: url }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/features/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/routes.ts":
/*!************************************!*\
  !*** ./src/app/features/routes.ts ***!
  \************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/features/about/about.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/features/tasks/tasks.component.ts");
/* harmony import */ var _bestpractices_bestpractices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bestpractices/bestpractices.component */ "./src/app/features/bestpractices/bestpractices.component.ts");




var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__["TasksComponent"] },
    { path: 'bestpractices', component: _bestpractices_bestpractices_component__WEBPACK_IMPORTED_MODULE_3__["BestPracticesComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/features/tasks/tasks.component.css":
/*!****************************************************!*\
  !*** ./src/app/features/tasks/tasks.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/tasks/tasks.component.html":
/*!*****************************************************!*\
  !*** ./src/app/features/tasks/tasks.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Standard Project tasks</h2>\n<div class=\"row\">\n<app-tilecard id=\"Architecture\" [smImg]=\"'assets/images/architecture.png'\" [title]=\"'Architecture'\" [subTitle]=\"'Develop Architecture for the Rule Application'\" [description]=\"'Address topology, HA, DR, CI/CD'\"  [urlMdPath]=\"'assets/docs/tasks/arch-dev-rule-sol.md'\" [size]=\"'1200px'\" [buttonName]=\"'Open'\"></app-tilecard>\n</div>\n"

/***/ }),

/***/ "./src/app/features/tasks/tasks.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/tasks/tasks.component.ts ***!
  \***************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
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

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/features/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/features/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\ncolor: #555;\ndisplay: block;\nfont-size: 0.9em;\nfont-weight: 400;\nmargin: 0 0 1em 0;\n}\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <br/>\n  <p>&copy; Jerome Boyer - {{version}} </p>\n</footer>\n<section id=\"footer\">\n  <ul class=\"icons\">\n    <li><a href=\"https://www.linkedin.com/in/jeromeboyer/\" class=\"fab fa-linkedin\"><span class=\"label\">LinkedIn</span></a></li>\n    <li><a href=\"https://twitter.com/agileitarch\" class=\"fab fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n    <li><a href=\"http://github.com/jbcodeforce\" class=\"fab fa-github\"><span class=\"label\">GitHub</span></a></li>\n    <li><a href=\"mailto:jerome.boyer@gmail.com\" class=\"fas fa-envelope\"><span class=\"label\">Email</span></a></li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.version = "v0.1.0";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-image: url(assets/images/banner.png)\">\n  <h2 style=\"color:white\">{{title}}</h2>\n</div>\n<div class=\"container\">\n  <ul class=\"breadcrumb\">\n    <li><a id=\"home\" class=\"fas fa-home\" [routerLink]=\"['/home']\"></a></li>\n    <li><a id=\"tasks\" [routerLink]=\"['/tasks']\">Tasks</a></li>\n    <li><a id=\"bestp\" [routerLink]=\"['/bestpractices']\">Best Practices</a></li>\n    <li><a id=\"about\" [routerLink]=\"['/about']\">About</a></li>\n\n  </ul>\n<div>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'Agile Business Rule Development';
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/my-dialog/my-dialog.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/my-dialog/my-dialog.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/my-dialog/my-dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/my-dialog/my-dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <markdown path={{data.url}}></markdown>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" cdkFocusInitial>Done</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/my-dialog/my-dialog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/my-dialog/my-dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MyDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MyDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/shared/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.css */ "./src/app/shared/my-dialog/my-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/reader/reader.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/reader/reader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/reader/reader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/reader/reader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<markdown path=\"fileName\"></markdown>\n"

/***/ }),

/***/ "./src/app/shared/reader/reader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/reader/reader.component.ts ***!
  \***************************************************/
/*! exports provided: ReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaderComponent", function() { return ReaderComponent; });
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

var ReaderComponent = /** @class */ (function () {
    function ReaderComponent() {
        this.fileName = "";
    }
    ReaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReaderComponent.prototype, "fileName", void 0);
    ReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reader',
            template: __webpack_require__(/*! ./reader.component.html */ "./src/app/shared/reader/reader.component.html"),
            styles: [__webpack_require__(/*! ./reader.component.css */ "./src/app/shared/reader/reader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReaderComponent);
    return ReaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tile/tile.component */ "./src/app/shared/tile/tile.component.ts");
/* harmony import */ var _reader_reader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reader/reader.component */ "./src/app/shared/reader/reader.component.ts");
/* harmony import */ var _tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tilecard/tilecard.component */ "./src/app/shared/tilecard/tilecard.component.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/shared/my-dialog/my-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_1__["NgxMdModule"].forRoot()
            ],
            entryComponents: [_tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_9__["TilecardComponent"], _tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_9__["MyDialog"], _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyDialogComponent"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_7__["TileComponent"], _reader_reader_component__WEBPACK_IMPORTED_MODULE_8__["ReaderComponent"], _tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_9__["TilecardComponent"], _tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_9__["MyDialog"], _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyDialogComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_7__["TileComponent"], _reader_reader_component__WEBPACK_IMPORTED_MODULE_8__["ReaderComponent"], _tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_9__["TilecardComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/tile/tile.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/tile/tile.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".roundRect {\n   margin: auto;\n   border-width : 2px;\n   border-radius: 8px;\n   border-style: solid;\n   border-color: #blue;\n   background-color: white;\n   box-shadow: 5px 5px 5px #blue;\n   margin-right: 15px;\n   margin-bottom: 15px;\n     padding: 20px;\n   marging: 10px;\n   height:220px;\n   width:280px;\n}\n"

/***/ }),

/***/ "./src/app/shared/tile/tile.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/tile/tile.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 roundRect\" [ngStyle]=\"{ 'box-shadow': style, 'border-color': color }\">\n      <h3>{{title}}</h3>\n      <p>{{description}}</p>\n\n      <button id=\"button\" *ngIf=\"!externalUrl\" mat-button (click)=\"submit()\" style=\"color: white;background-color: {{color}};\" class=\"btn btn-primary\">{{buttonName}}</button>\n      <a *ngIf=\"externalUrl\" href={{urlPath}}>{{buttonName}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/tile/tile.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/tile/tile.component.ts ***!
  \***********************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TileComponent = /** @class */ (function () {
    function TileComponent(router) {
        this.router = router;
        this.id = '';
        this.color = '#8c4507';
        this.title = 'title';
        this.description = 'Short description';
        this.buttonName = 'Submit';
        this.urlPath = 'home';
        this.externalUrl = false;
    }
    TileComponent.prototype.ngOnInit = function () {
        this.style = '10px 10px 3px ' + this.color;
        this.externalUrl = (this.urlPath.startsWith("http"));
    };
    TileComponent.prototype.submit = function () {
        console.log('Go to ' + this.urlPath);
        this.router.navigate([this.urlPath]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TileComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TileComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TileComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TileComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TileComponent.prototype, "buttonName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TileComponent.prototype, "urlPath", void 0);
    TileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tile',
            template: __webpack_require__(/*! ./tile.component.html */ "./src/app/shared/tile/tile.component.html"),
            styles: [__webpack_require__(/*! ./tile.component.css */ "./src/app/shared/tile/tile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TileComponent);
    return TileComponent;
}());



/***/ }),

/***/ "./src/app/shared/tilecard/dialog.html":
/*!*********************************************!*\
  !*** ./src/app/shared/tilecard/dialog.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <markdown path={{data.urlMdPath}}></markdown>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" cdkFocusInitial>Done</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/tilecard/tilecard.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/tilecard/tilecard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jbcard {\n  max-width: 200px;\n}\n\nimg.centerred {\n  display: block;\n  margin-left: auto;\n  margin-right: auto\n}\n"

/***/ }),

/***/ "./src/app/shared/tilecard/tilecard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/tilecard/tilecard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"jbcard\">\n  <mat-card-header>\n    <div mat-card-avatar style={{style}}></div>\n    <mat-card-title>{{title}}</mat-card-title>\n    <mat-card-subtitle  *ngIf=\"subTitle\">{{subTitle}}</mat-card-subtitle>\n  </mat-card-header>\n  <img class=\"centerred\" mat-card-image src={{smImg}} style=\"width:100px;height:100px;\">\n  <mat-card-content>\n    <p>\n      {{description}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button *ngIf=\"urlMdPath\" (click)=\"openDialog()\">{{buttonName}}</button>\n    <button mat-raised-button *ngIf=\"!externalUrl && ! urlMdPath\" (click)=\"submit()\">{{buttonName}}</button>\n    <a *ngIf=\"externalUrl\" href={{urlPath}}>{{buttonName}}</a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/tilecard/tilecard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/tilecard/tilecard.component.ts ***!
  \*******************************************************/
/*! exports provided: TilecardComponent, MyDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilecardComponent", function() { return TilecardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialog", function() { return MyDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
Another type of tile using the Material card.
*/
var TilecardComponent = /** @class */ (function () {
    function TilecardComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.title = "Title";
        this.subTitle = "";
        this.description = "The content";
        this.smImg = "assets/images/study.jpg";
        this.urlMdPath = "";
        this.buttonName = 'Submit';
        this.urlPath = 'home';
        this.size = "1020px";
        this.externalUrl = false;
        this.style = "background-image: url(smImg);background-size: cover;";
        this.externalUrl = (this.urlPath.startsWith("http"));
    }
    TilecardComponent.prototype.ngOnInit = function () {
        this.style = "background-image: url(smImg);background-size: cover;";
    };
    TilecardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(MyDialog, {
            width: '1020px',
            data: { title: this.title, urlMdPath: this.urlMdPath }
        });
    };
    TilecardComponent.prototype.submit = function () {
        this.router.navigate([this.urlPath]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "subTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "smImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "urlMdPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "buttonName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "urlPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "size", void 0);
    TilecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tilecard',
            template: __webpack_require__(/*! ./tilecard.component.html */ "./src/app/shared/tilecard/tilecard.component.html"),
            styles: [__webpack_require__(/*! ./tilecard.component.css */ "./src/app/shared/tilecard/tilecard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TilecardComponent);
    return TilecardComponent;
}());

var MyDialog = /** @class */ (function () {
    function MyDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MyDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MyDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mydialog',
            template: __webpack_require__(/*! ./dialog.html */ "./src/app/shared/tilecard/dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MyDialog);
    return MyDialog;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeromeboyer/Code/jbcodeforce/abrd.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map