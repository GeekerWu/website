webpackJsonp([2],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vision_vision__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nationaltax_nationaltax__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domestictax_domestictax__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ListPage } from '../list/list'
// import { MyPage } from '../my/my';






// declare var echarts;//设置echarts全局对象
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl, settings, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.http = http;
        this.folderList = [];
        // 获取当前主题
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.getFolderList = function () {
        var _this = this;
        console.log('Home page get folder list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folder_sub', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('folderlist response', response.json());
            _this.folderList = response.json().subs;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res.status);
            return res;
        })
            .catch(this.handleError);
    };
    HomePage.prototype.getNavList = function () {
        var _this = this;
        console.log('Home page get nav list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folders', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('navList response', response.json());
            _this.navList = response.json().folders;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    HomePage.prototype.navTo = function (pagename) {
        if (pagename == 'nationaltax') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__nationaltax_nationaltax__["a" /* NationaltaxPage */], {
                // id: id,
                folderList: this.folderList
            });
        }
        else if (pagename == 'aboutus') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__["a" /* AboutusPage */], {
                // id: id,
                folderList: this.folderList
            });
        }
        else if (pagename == 'domestictax') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__domestictax_domestictax__["a" /* DomestictaxPage */], {
                // id: id,
                folderList: this.folderList
            });
        }
    };
    HomePage.prototype.presentAboutusModal = function (pagename) {
        if (pagename == 'vision') {
            var AboutusModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__vision_vision__["a" /* VisionPage */], { userId: 8675309 });
            AboutusModal.onDidDismiss(function (data) {
                console.log(data);
            });
            AboutusModal.present();
        }
        else if (pagename == 'aboutus') {
            var AboutusModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__["a" /* AboutusPage */], { userId: 8675309 });
            AboutusModal.onDidDismiss(function (data) {
                console.log(data);
            });
            AboutusModal.present();
        }
        ;
    };
    HomePage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "container", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="../../assets/imgs/logo-website.png" height="50" width="200"/>恒星环宇国际税务工作室</ion-title>\n\n    <button class="EnglishBtn" ion-button color="dark">English</button>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button menuToggle icon-only>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark" (click)="navTo(\'aboutus\')">关于我们</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">企业视野</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">境内税讯</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">境外税讯</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">国别速览</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">申报资料</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">咨询通道</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">观点透视</button>\n          </ion-col>\n          <ion-col>\n            <ion-searchbar\n                    [(ngModel)]="myInput"\n                    [showCancelButton]="shouldShowCancel"\n                    (ionInput)="onInput($event)"\n                    (ionCancel)="onCancel($event)">\n            </ion-searchbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides autoplay="2000" loop="true" speed="500">\n    <ion-slide>\n      <h1>多语种一站式落地服务</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>境外涉税境内对接</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>高精尖经营团队</h1>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" height="300" width="500" (click)="presentAboutusModal(\'aboutus\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              关于我们\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testA\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" height="300" width="500" (click)="presentAboutusModal(\'vision\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              企业视野\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testB\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../../assets/imgs/TBD筹划方案.jpeg" height="300" width="500" />\n          <ion-card-content>\n            <ion-card-title>\n              待定\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testC\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="../../assets/imgs/境内税讯.jpeg" height="300" width="500" (click)="navTo(\'domestictax\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              境内税讯\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testD\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" (click)="navTo(\'nationaltax\')" height="300" width="500"/>\n          <ion-card-content>\n            <ion-card-title>\n              境外税讯\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testE\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" height="300" width="500"/>\n          <ion-card-content>\n            <ion-card-title>\n              国别速览\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testF\n      </ion-col>\n    </ion-row>\n    <ion-row>\n    <ion-col>\n      <ion-card>\n        <!--<img src="assets/imgs/taxfree.png" />-->\n\n        <img src="../../assets/imgs/申报资料.jpeg" height="300" width="500" (click)="navTo(\'nationaltax\')"/>\n        <ion-card-content>\n          <ion-card-title>\n            申报资料\n          </ion-card-title>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n        </ion-card-content>\n      </ion-card>\n      testG\n    </ion-col>\n    <ion-col>\n      <ion-card>\n        <img src="../../assets/imgs/咨询通道.png" (click)="navTo(\'domestictax\')" height="300" width="500"/>\n        <ion-card-content>\n          <ion-card-title>\n            咨询通道\n          </ion-card-title>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n        </ion-card-content>\n      </ion-card>\n      testH\n    </ion-col>\n    <ion-col>\n      <ion-card>\n\n        <img src="../../assets/imgs/观点透视.jpeg" height="300" width="500"/>\n        <ion-card-content>\n          <ion-card-title>\n            观点透视\n          </ion-card-title>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n        </ion-card-content>\n      </ion-card>\n      testI\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n\n\n  <!--<ion-item class="files">\n    My BDP\n    <ion-icon name="ios-arrow-down" item-right *ngIf="isShow" (click)="isShow=!isShow"></ion-icon>\n    <ion-icon name="ios-arrow-forward" item-right *ngIf="!isShow" (click)="isShow=!isShow"></ion-icon>\n  </ion-item>\n  <ion-grid *ngIf="isShow">\n    <ion-row>\n      <ion-col *ngFor="let list of folderList" col-6>\n        <ion-list no-lines>\n          <ion-item (click) = "navTo(list.id)">\n            <ion-icon name="folder" item-left color="danger"></ion-icon>\n            {{list.name}}\n            <p><span *ngIf = "list.folder_count != \'0\'" >{{list.folder_count}}</span>&nbsp;folders&nbsp;&nbsp;<span *ngIf = "list.dashboard_count !=\'0\'">{{list.dashboard_count}}&nbsp;dashboards</span></p>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n  <!--<ion-item class="chart">\n    <div #EchartsContent  class="EchartsDiv"></div>\n  </ion-item>-->\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!!</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		683,
		1
	],
	"../pages/my/my.module": [
		684,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_my__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ListPage } from '../list/list'



// declare var echarts;//设置echarts全局对象
var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl, alertCtrl, settings, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.http = http;
        this.folderList = [];
        // 获取当前主题
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    AboutusPage.prototype.ionViewDidEnter = function () {
    };
    AboutusPage.prototype.getFolderList = function () {
        var _this = this;
        console.log('Home page get folder list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folder_sub', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('folderlist response', response.json());
            _this.folderList = response.json().subs;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res.status);
            return res;
        })
            .catch(this.handleError);
    };
    AboutusPage.prototype.getNavList = function () {
        var _this = this;
        console.log('Home page get nav list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folders', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('navList response', response.json());
            _this.navList = response.json().folders;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    AboutusPage.prototype.navTo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_my__["a" /* MyPage */], {
            id: id,
            folderList: this.folderList
        });
    };
    AboutusPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AboutusPage.prototype, "container", void 0);
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/aboutus/aboutus.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>aboutus</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      About CHNITS\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-card-title>\n        Intro\n      </ion-card-title>\n      <p>\n        It was a Global Company.Was build on 2018.We will focus on Your company Tax.Make lower Tax.The final target to save your Tax Cost.\n      </p>\n    </ion-card-content>\n    <img src="assets/imgs/taxfree.png"/>\n  </ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/aboutus/aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_my__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ListPage } from '../list/list'



// declare var echarts;//设置echarts全局对象
var VisionPage = /** @class */ (function () {
    function VisionPage(navCtrl, alertCtrl, settings, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.http = http;
        this.folderList = [];
        // 获取当前主题
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    VisionPage.prototype.ionViewDidEnter = function () {
    };
    VisionPage.prototype.getFolderList = function () {
        var _this = this;
        console.log('Home page get folder list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folder_sub', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('folderlist response', response.json());
            _this.folderList = response.json().subs;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res.status);
            return res;
        })
            .catch(this.handleError);
    };
    VisionPage.prototype.getNavList = function () {
        var _this = this;
        console.log('Home page get nav list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folders', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('navList response', response.json());
            _this.navList = response.json().folders;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    VisionPage.prototype.navTo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_my__["a" /* MyPage */], {
            id: id,
            folderList: this.folderList
        });
    };
    VisionPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VisionPage.prototype, "container", void 0);
    VisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vision',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/vision/vision.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>vision</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      企业视野\n    </ion-card-header>\n    <ion-card-content>\n      <!--<ion-card-title>\n        企业视野\n      </ion-card-title>-->\n      <p>\n        恒星环宇国际咨询的专家团队在国际税务领域辛勤耕耘二十余载，在广阔的国际视野和规划格局下，在客户价值链的基础上为客户提供支出和收益最透明，合规性最强的解决方案；为个人和企业客户的全球拓展战略拓展提供以税务为基础的增值服务；\n        <br/>最大化满足客户需求，为您量身定制专属于您自身需求的出海税务方案和融资方案；\n        <br/>最有效的对接，直接为您联系到包括境外税务机关人员或银行高级经理在内的核心利益方\n      </p>\n      <img src="../../assets/imgs/咨询通道.png" height="360" width="570"/>\n      <p>\n        <br/>既有211大学教授，也有国际注册会计师。在2012年至2017年国际税务环境波动和税务条约建立的基础上，公司在2018年第一年CRS执行年正式进行境内市场的开拓，将以往在多边跨境税务的工作经验带入到中国新税务体系下的市场，以大格局、广视角、多维度为跨境企业和个人，提供针对性强、实用性高、持久稳定的国际税务筹划方案。\n\n        <br/>知识产权转移初期的法律持有人和经济持有人(beneficial owner and economic owner)，转移过程中涉及的委托研发、转移定价和成本分摊安全规划，转移后的版权/专利费用在缔约国的暂缴税，和可能涉及到兼并企业取得技术专利的资本架构，和兼并过程中涉及到的结构重组，和日后退出时的资本利得税(capital gain)前涉解决方案。\n\n        <br/>股权转移，资本重组，中间层架构股本回流\n\n        <br/>当下对过去的回望是当下可以对未来期望的第一步，恒星国际的税务专业性不仅在于背景知识和行业深度，还在于立足国际环境审视自身在非零和博弈中的姿态和位置，以跨境企业和中国涉税机关的最大利益为业务出发点，以最有效最符合趋势的对接方式为对外交涉协商的基础，以大格局、广视角、多维度为利益方提供针对性强、实用性高、持久稳定的一线税务方案。\n\n        <br/>职能财税\n        <br/>138107*****\n        <br/>谢*****\n      </p>\n    </ion-card-content>\n\n  </ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/vision/vision.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], VisionPage);
    return VisionPage;
}());

//# sourceMappingURL=vision.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationaltaxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_my__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ListPage } from '../list/list'



// declare var echarts;//设置echarts全局对象
var NationaltaxPage = /** @class */ (function () {
    function NationaltaxPage(navCtrl, alertCtrl, settings, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.http = http;
        this.folderList = [];
        // 获取当前主题
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    NationaltaxPage.prototype.ionViewDidEnter = function () {
    };
    NationaltaxPage.prototype.getFolderList = function () {
        var _this = this;
        console.log('Home page get folder list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folder_sub', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('folderlist response', response.json());
            _this.folderList = response.json().subs;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res.status);
            return res;
        })
            .catch(this.handleError);
    };
    NationaltaxPage.prototype.getNavList = function () {
        var _this = this;
        console.log('Home page get nav list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folders', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('navList response', response.json());
            _this.navList = response.json().folders;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    NationaltaxPage.prototype.navTo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_my__["a" /* MyPage */], {
            id: id,
            folderList: this.folderList
        });
    };
    NationaltaxPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NationaltaxPage.prototype, "container", void 0);
    NationaltaxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nationaltax',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/nationaltax/nationaltax.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>境外税讯</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-searchbar>\n          title\n        </ion-searchbar>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>欧盟-</h2>\n            <p>比利时税务政策的变动-截至2018年6月</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png"/>\n            </ion-thumbnail>\n            <h2>Title</h2>\n            <p>Desc</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-24>\n\n            <ion-card>\n              <ion-card-header>\n                欧盟-比利时税务政策的变动-截至2018年6月\n              </ion-card-header>\n              <ion-list>\n              <ion-card-content>\n                伴随着CRS第一年正式执行，2018注定是各国国际税务不平静的一年。国内的个税立法提案，美国税改(TCJA)的执行，澳大利亚对外国人资本利得税的改动，欧盟的反避税指示(ATAD)也对各成员国一一落实，作用在全欧盟范围内。ATAD包括四大规则：\n                CFC规则旨在打击利润转移至低税国;\n                双开关规则(switchover)旨在堵住双边不征税收入的漏洞，如境外股息从以前的作为海外收入不征税，现在改为依据入境前税务记录进行入境补征税；\n                转退税规则(exit taxation)旨在打击转移资产以避税的传统行为，如从前利用旧专利委托研发将新成果法律持有者转至低税国，现在改为旧专利在走出欧盟的第一阶段就进行前期征税；\n                利息限定规则旨在打击自放“高利贷”滥用利息抵扣，加设抵扣限制，超出部分不享受抵扣。\n                其中比利时受到的影响包括以下几点：\n                税务合并清缴，这样关联企业的税损可以被用来抵扣盈利企业应税总额，同时海外子公司也可以合并在该报表内。2019年1月1日起的财务年开始执行。\n                企业所得税从2018和2019年的29.5%将会在2020年1月1日期的财务年降至25%。\n                股息收入抵免从95%提高到100%，原最低0.412%的资本利得税被取消，比利时成为完全没有资本利得税的国家(CIG)。享受这两项优惠要先经过“参与抵免”的判定，必须同时满足如下三点，一所控子公司股本最低不低于10%或重组估值不低于250万欧元，二最少持有12个月，三符合资本利得税的归类判定。\n                这里要注意如持有期小于12个月，但其它两项满足，在2018和2019财务年以25.5%征收，2020后按25%。如持有期大于12个月，但另两项没有同时满足，在2018和2019财务年以29.85%征收，2020后按25%。\n                欧盟对ATAD下CFC规则给予成员国选择权，选择采用定位于“低税子公司的具体收入项”或“人为操纵(以支出)分配给子公司收入”。这样的选择仅对从非实质经营的CFC取得的收入进行限制，而并没有对低税子公司所有的消极收入作出限制，这样的过渡还算柔和，2019年1月1日起的财务年执行。\n                “开曼税”附加到比利时个人和非公司机构，此条款针的设计对境外信托和境外私人基金，对象不仅是信托或基金的法律建立人，还包含与其相关的第三方如向机构曾转移过资产、或享有经济收益的人如境外保单受益人。值得注意的是此条款不对比利时税务居民公司。比利时财务部长johan Van Overtveldt，在2018年3月接受比鲁塞尔时报采访时，曾表示过“特别税务调查组有太多的工作准备开展，在目前阶段尚未建立针对不申报境外持有行为的惩罚措施，但应该会建立罚金惩罚制度。”\n                同时值得注意的是外国人进入比利时进行短暂工作时，并不会被按照签证停留时间被自动认为非税务居民。比利时认定税务居民是从入境之日起有可以管理自己资产的居住地，而不存在“183天”的规定，因此客户在进入比利时取得收入后要注意自己所在国对税务居民的判定，防止在税务信息对接时产生不必要的税务责任。\n                另外文中一开始提到的2018年澳大利亚对外国人资本利得税的提案一旦通过(可能性>90%)，需要英语运营的投资集团，可以考虑将现澳集团母公司降级为比利时子公司级别，倒置受控于比利时另一母公司，合同上拆解管理并分配决策地任务以满足判定要求。\n                这样一来所有中间层架在比利时的企业依据自身经营需求，可能会做出相应的调整，对于受到实质经营影响的企业会旭辉考虑迁出比利时。迁出时要注意：1. 比利时队税务居民的判定按“实质”而非注册地或管理地，即时销税号但主要居住地仍在比利时，仍会该企业被判定为比利时税务局民。2. 倒置税务在欧盟的发展，个人认为虽不会在短期内通过议案表决迅速形成法律效应，但纵观国际背景，税务倒置结构已在美国通过决议(如s385)，在美方抗议欧盟地区地税国为美国企业留下税务倒置的后患背景下，2016年底卢森堡事件(Antoine Deltour“法国斯诺登”非法泄露财务文件，后被授予奖励增强欧盟凝聚力的欧洲市民奖)发生，这些相关因素个人认为会推动欧盟不得不对税务倒置进行着手解决，即使欧盟部分成员国是受益方。\n                在这样的环境下，比利时企业和其他各国已设立税务架构的公司和集团应抓住目前格局中各国的税务优势重新制定税务方案，以求以最低成本解决税务风险。\n                本公司以“高、精、尖”的团队特点为客户提供针对性更强、实用性更高的国际税务导航。同时为客户提供安全稳定的股权变更申请，资金出境备案，小语种翻译服务合全方位对接的境外税务落地服务。\n\n                https://uk.practicallaw.thomsonreuters.com/4-597-7846?transitionType=Default&contextData=(sc.Default)&firstPage=true&bhcp=1\n\n                5.1 主管为财政部+税务总署。\n\n                5.2 征税判定\n                全球所得，居民纳税人。建筑工程，油/气矿/井在本地开工第一天形成PE，服务类在本地提供咨询12月内超90天。\n\n                企业所得税豁免物业\n                海运，空运，依阿曼法律成立的投资基金和投资在马斯喀特证券市场，工业，矿采等。\n\n\n                Confidential copyright-Tony LIU税率\n                企业15%，个人所得0%。申报基础是自我评估制度，要求取得税务证，先经工商部许可，再申税号，会计账簿保存10年，经税务局批准可外汇记录。资本弱化债资比不超2:1。\n                2017受海合会影响税务近年会调，如增加消费税，加强关联交易披露，规范化转让定价等。\n                暂无成本分摊协议管理，暂无受控外国企业，暂无预约定价安排。\n\n                税前扣除\n                为了获取收入或以经营为目的所产生的支出，尤其包括：\n                商业用途的贷款利息，包括关联方，但要是依照行政法规在限制基础上的贷款；\n                直线折旧，不计算重新估值，其中知识产权按33%折旧；\n                企业发生的筹建费用可以3或5年摊销；\n                只有税务机构才有权认定坏账且无法收回的情况；\n                付给主席、股份有限公司董事会成员、全职管理其他公司的合伙人等此类支出视作企业成本；\n                因员工福利发生的任何金额（养老基金或由税务机构批准的此类供款，完全或仅为员工从本企业退休后提交养老金或其他类似福利的任何金额，或员工去世后为其家属提交养老金或其他类似福利所发生的任何金额）;\n                经营中外汇收益不纳税，损失也不扣除；\n                对已缴纳境外税可以抵免。\n\n                5.6 不能扣除(外企限制)\n                为外国总部发生的费用，给总部支付的利息(如证明贷款为给阿曼分公司独自使用，向银行借贷的利息可以扣除)；\n                给阿曼代理人的担保费最多只扣除应纳税收入的5%。\n\n                5.7 非居民企业支出\n                以withholding tax形式征收。暂非居民无定义，但遵循OECD，非阿曼注册，在境内没有PE，征税包括几乎所有interests, royalties, dividend, service, development and research fees, governance fees, IT  service taxed at 10%。\n                如果有双边税务协议，按协议tax rate来。\n\n                比利时和中国双边税收协议于2014年1月1日生效执行\n\n                https://www.ey.com/gl/en/services/tax/international-tax/alert--belgium-introduces-100-percent-participation-exemption\n              </ion-card-content>\n\n              </ion-list>\n            </ion-card>\n\n\n\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/nationaltax/nationaltax.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], NationaltaxPage);
    return NationaltaxPage;
}());

//# sourceMappingURL=nationaltax.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomestictaxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_my__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ListPage } from '../list/list'



// declare var echarts;//设置echarts全局对象
var DomestictaxPage = /** @class */ (function () {
    function DomestictaxPage(navCtrl, alertCtrl, settings, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.http = http;
        this.folderList = [];
        // 获取当前主题
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    DomestictaxPage.prototype.ionViewDidEnter = function () {
    };
    DomestictaxPage.prototype.getFolderList = function () {
        var _this = this;
        console.log('Home page get folder list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folder_sub', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('folderlist response', response.json());
            _this.folderList = response.json().subs;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res.status);
            return res;
        })
            .catch(this.handleError);
    };
    DomestictaxPage.prototype.getNavList = function () {
        var _this = this;
        console.log('Home page get nav list');
        // console.log(localStorage['session_token']);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT ' + localStorage['session_token'] });
        // let token = JSON.parse(localStorage['session_token']).token;
        // let headers = new Headers({ 'Authorization': 'token' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folders', { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('navList response', response.json());
            _this.navList = response.json().folders;
            return response;
        }, function (res) {
            console.log('on rejected');
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DomestictaxPage.prototype.navTo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_my__["a" /* MyPage */], {
            id: id,
            folderList: this.folderList
        });
    };
    DomestictaxPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('EchartsContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DomestictaxPage.prototype, "container", void 0);
    DomestictaxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-domestictax',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/domestictax/domestictax.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>境内税讯</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar>\n          title\n        </ion-searchbar>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n            hahahahahhahahahhahahahahahhahahhahahahahahhahahahah\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/domestictax/domestictax.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], DomestictaxPage);
    return DomestictaxPage;
}());

//# sourceMappingURL=domestictax.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {HTTP,HTTPResponse} from '@ionic-native/http';


// import { stringify } from '@angular/core/src/render3/util';

// import { LoadingController } from 'ionic-angular';
var AuthProvider = /** @class */ (function () {
    function AuthProvider(
        // private http: Http,
        http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    // private response;
    // private headers = new HttpHeaders().set({'Content-Type':'application/json','ttt':'tttt2'});
    // header=this.headers.append('ttt','tttt2');
    AuthProvider.prototype.getToken = function (data) {
        var _this = this;
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getHostUrl() + '/auth/api-token-auth/', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            //存token
            // console.log(response.status);
            if (response['token']) {
                localStorage['token'] = JSON.stringify(response);
                // console.log('token get succeed!');
                return true;
            }
        }, function (response) {
            // console.log(response.status);
            var alert = _this.alertCtrl.create({
                title: 'Token get Failed',
                subTitle: 'request Failed',
                buttons: ['OK']
            });
            alert.present();
        })
            .catch(this.handleError);
    };
    AuthProvider.prototype.refreshToken = function () {
        // this.headers=this.headers.append('Authorization','JWT '+localStorage['session_token'])
        //10.116.47.43:8888/web
        var data = { token: localStorage['session_token'] };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getHostUrl() + '/auth/api-token-refresh/', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            // console.log('onfulfill');
            // console.log(response);
            // console.log(response.status);
            var res = response;
            localStorage['session_token'] = res['token'];
            return response;
            // console.log('response', response);
            // if (response['token']) {
            //   JSON.stringify(response)
            // }
        }, function (response) {
            // console.log('promise on rejected');
            // console.log(response.status);
            return response;
            //Token has been over valid
            // let alert = this.alertCtrl.create({
            //   title: 'Token verify Failed',
            //   subTitle: 'request Failed',
            //   buttons: ['OK']
            // });
            // alert.present();
        })
            .catch(this.handleError);
    };
    /*tester(){
  
      const headers2 = new HttpHeaders().set("X-CustomHeader","custom header value");
      let data2 = {username: "test", password: "12334test"};
      this.http.post('http://localhost:8888/web',data2  ,{headers:headers2})
      // .post('http://10.116.18.75:8000/auth/api-token-auth/', JSON.stringify(data) ,{headers:this.headers})
        .subscribe(
          (val) => {
            console.log("POST call successful value returned in body",
  
              val);
           return  val;
          },
          response => {
            console.log("POST call in error", response);
            return response
          },
          () => {
            console.log("The POST observable is now completed.");
            return ("done");
          });
    }*/
    // api_auth_token(data:object){
    //   // {"username":"test","password":"1234test"}
    //   // console.log(JSON.stringify(data));
    //   // this.headers =  this.headers.append('wuqihahaha','hahahaha');
    //
    //   this.http
    //     // .post('http://localhost:8888/web', JSON.stringify(data) ,{headers:this.headers})
    //      .post(AppConfig.getHostUrl()+'/auth/api-token-auth/', JSON.stringify(data) ,{headers:this.headers})
    //     // .post('http://10.116.18.75:8000/auth/api-token-auth/', JSON.stringify(data) ,{headers:this.headers})
    //     .subscribe(
    //       (res) => {
    //         // console.log("POST call successful value returned in body");
    //         // console.log(res);
    //         this.response = res;
    //         //return res;
    //       },
    //       err => {
    //         // console.log("POST call in error");
    //         // console.log(err);
    //         this.response = err;
    //         //return err;
    //       },
    //       () => {
    //         console.log("The POST observable is now completed.");
    //         //return ("done");
    //         console.log(this.response);
    //         return this.response;
    //       });
    //     // return  'hahah ';
    //   // console.log(this.response);
    //   // return this.response;
    // }
    // verifyToken(): Promise<any> {
    //   if (localStorage['token']) {
    //     return this.http
    //       .post(AppConfig.getHostUrl() + '/auth/api-token-verify/', localStorage.getItem('token'), { headers: this.headers })
    //       .toPromise()
    //       .then((response) => {
    //         console.log('response', response);
    //         if (response['token']) {
    //           localStorage.setItem('token', JSON.stringify(response));
    //           return true;
    //         }
    //       },
    //         (response) => {
    //           //Token has been over valid
    //           let alert = this.alertCtrl.create({
    //             title: 'Token verify Failed',
    //             subTitle: 'request Failed',
    //             buttons: ['OK']
    //           });
    //           alert.present();
    //         }
    //       )
    //       .catch(this.handleError);
    //   }
    // }
    /*api_auth_token2(username,password):Promise<any>{
      let data = { username: username, password:password};
      console.log(JSON.stringify(data));
      this.http
        .post(AppConfig.getHostUrl() + '/auth/api-token-auth/', JSON.stringify(data))
        .timeout(AppConfig.getTimeout())
        .subscribe(
          (response) => {
            return response.json();
            console.log(response.json());
            let res = response.json();
            // loading.dismiss();
            if (res.success) {
              AppConfig.setToken(localStorage['auth_token']);
              // this.navCtrl.setRoot(HomePage);
            }
          }, response => {
            return response.json();
            console.log(response);
            loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Auto login failed',
              subTitle: 'session invalid',
              buttons: ['OK']
            });
            alert.present();
            localStorage['auth_token'] = 'undefined';
  
            // this.navCtrl.setRoot(HomePage);
          }
          )
  
    }*/
    AuthProvider.prototype.handleError = function (error) {
        console.log(error);
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=authtoken.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authtoken_authtoken__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Buffer } from 'buffer';



var LoginPage = /** @class */ (function () {
    function LoginPage(http, navCtrl, alertCtrl, authToken, loadingCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authToken = authToken;
        this.loadingCtrl = loadingCtrl;
        this.username = "";
        this.password = "";
        this.password_encryption = "";
        this.otpCode = "";
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    LoginPage.prototype.toggle = function (toggle) {
        console.log('remember flag is: ' + toggle);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log(localStorage['hostname'] == undefined);
        console.log(localStorage['remember']);
        if (localStorage['hostname'] != 'planningmdev.lenovo.com' && localStorage['hostname'] != 'planningm.lenovo.com') {
            localStorage['hostname'] = 'planningmdev.lenovo.com';
            // this.serverchange();
        }
        ;
        /*let loading = this.loadingCtrl.create({
          content: 'Auto login...'
        });*/
        // console.log(localStorage['session_token']);
        //token通过则自动登录
        /* if (localStorage['token'] && localStorage['token'].token.length) {
           this.navCtrl.setRoot(HomePage);
         }
     */
        if (localStorage['remember'] == 'true') {
            this.rememberMe = localStorage['remember'];
            if (this.rememberMe == 'true') {
                this.username = localStorage['username'];
                this.password = localStorage['password'];
                if (localStorage['session_token'] != 'undefined' && localStorage['session_token'] != '') {
                    console.log('calling refresh token');
                    var promise = this.authToken.refreshToken();
                    promise.then(function (res) {
                        console.log('fulfill');
                        console.log(res.hasOwnProperty("token"));
                        if (res.hasOwnProperty('token')) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        else {
                            if (res.error.hasOwnProperty('non_field_errors')) {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'auto login failed',
                                    // subTitle:'request timeout,switch server',
                                    subTitle: res.error['non_field_errors'],
                                    buttons: ['OK']
                                });
                                alert_1.present();
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'auto login failed',
                                    // subTitle:'request timeout,switch server',
                                    subTitle: res.error,
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                        }
                    }, function (err) {
                        // console.log(err);
                        console.log('err');
                        var alert = _this.alertCtrl.create({
                            title: 'auto login failed',
                            subTitle: err,
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }
                ;
            }
            ;
        }
    };
    LoginPage.prototype.serverchange = function () {
        var alert = this.alertCtrl.create({
            title: 'server choose',
            subTitle: 'select your environment',
            inputs: [
                {
                    type: 'radio',
                    label: 'PRD  Available' +
                        '',
                    value: 'planningm.lenovo.com'
                },
                {
                    type: 'radio',
                    label: 'Dev Available' +
                        '',
                    value: 'planningmdev.lenovo.com'
                    // value: 'planningm.lenovo.com'
                }
            ],
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function (data) {
                        localStorage['hostname'] = data;
                        console.log('confirm clicked' + data);
                    }
                }
            ]
        });
        alert.present();
    };
    ;
    LoginPage.prototype.logIn_timeout = function () {
        var _this = this;
        if (this.username.length == 0) {
            var alert_3 = this.alertCtrl.create({
                title: 'Input Username',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.password.length == 0) {
            var alert_4 = this.alertCtrl.create({
                title: 'Input Password',
                buttons: ['OK']
            });
            alert_4.present();
        }
        else if (this.otpCode.length == 0) {
            var alert_5 = this.alertCtrl.create({
                title: 'Input otpCode',
                buttons: ['OK']
            });
            alert_5.present();
        }
        else if (this.otpCode.length != 6) {
            var alert_6 = this.alertCtrl.create({
                title: 'otpCode should  6 numbers',
                buttons: ['OK']
            });
            alert_6.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'loading...'
            });
            // Login Request
            var data = { username: this.username, password: this.password, otpcode: this.otpCode };
            console.log(JSON.stringify(data));
            this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getHostUrl() + '/auth/api-token-auth/', JSON.stringify(data), { headers: this.headers })
                .timeout(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getTimeout())
                .subscribe(function (response) {
                // console.log('response', response.json());
                var res = response.json();
                loading_1.dismiss();
                // debugger;
                if (res['token']) {
                    //  console.log(res['token'])
                    localStorage['session_token'] = res['token'];
                    localStorage['username'] = _this.username;
                    localStorage['password'] = _this.password;
                    localStorage['remember'] = _this.rememberMe;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                // //用户名密码正确时
                // if (res) {
                //
                //   //如果勾选rememberMe此处存储  默认不勾选
                //   // if (this.rememberMe) {
                //   //   localStorage['username'] = this.username;
                //   //   console.log(localStorage['username']);
                //   //   localStorage['password'] = this.password;
                //   //   console.log(localStorage['password']);
                //   // }
                //   //token
                //   let hasToken;
                //   if (!localStorage['token']) {
                //     //没有token 获取
                //     hasToken = this.authToken.getJWTToken(data);
                //   } else {
                //     //有token  验证
                //     hasToken = this.authToken.refreshToken();
                //   }
                //
                //   //token通过,登陆
                //   if (hasToken['__zone_symbol__value']) {
                //     console.log('has', hasToken);
                //
                //   }
                // }
            }, function (err) {
                // console.log(err.json());
                var res = err.json();
                // console.log(res);
                loading_1.dismiss();
                if (res['non_field_errors']) {
                    var alert_7 = _this.alertCtrl.create({
                        title: 'server error',
                        // subTitle:'request timeout,switch server',
                        subTitle: res['non_field_errors'],
                        buttons: ['OK']
                    });
                    alert_7.present();
                }
            }, function () {
                // let status = JSON.stringify("complete");
                // console.log(status);
                // loading.dismiss();
            });
        }
    };
    LoginPage.prototype.remberMechange = function () {
        console.log(this.rememberMe);
        if (this.rememberMe) {
            localStorage['username'] = this.username;
            localStorage['passsword'] = this.password;
        }
        if (this.rememberMe == false) {
            localStorage['username'] = '';
            localStorage['passsword'] = '';
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/login/login.html"*/'<ion-content class="login-page">\n  <img src="https://planningmdev.lenovo.com/sciweb/web/assets/img/bg.png" class="fixed-content" />\n  <div class="bar-titlte">\n    <span id="Login">Login</span>\n    <button class="btn-title" ion-button icon-only (click)="serverchange()">\n      <ion-icon name="settings"></ion-icon>\n    </button>\n  </div>\n  <ion-card>\n    <img src="https://planningmdev.lenovo.com/sciweb/web/assets/img/maobl_bg.png" class="blur fixed-content" />\n    <ion-item no-lines class="card-logo">\n      <img src="https://planningmdev.lenovo.com/sciweb/web/assets/img/login.png" height="120" width="60" />\n    </ion-item>\n    <ion-item class="card-username">\n      <ion-input type="text" placeholder="Your itcode" [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item class="card-password">\n      <ion-input type="password" placeholder="Your AD Password " [(ngModel)]="password"></ion-input>\n    </ion-item>\n    <ion-item class="card-otpCode">\n      <ion-input type="otpCode" placeholder="Your otpCode " [(ngModel)]="otpCode"></ion-input>\n    </ion-item>\n    <ion-item no-lines class="card-remember">\n      <label item-right>Remember Me hahaha</label>\n      <ion-toggle [(ngModel)]="rememberMe" (ionChange)="remberMechange()"></ion-toggle>\n    </ion-item>\n    <button ion-button block class="card-button" color="default" (click)="logIn_timeout(username, password)">\n      Login\n    </button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_authtoken_authtoken__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

/*    loading.present();
    let lenovo = 'lenovo';
    let appkey = '3BA6030D88404F3CAC943B1598341FBB';
    let url = `https://wngfp.unifiedcloud.lenovo.com/v1/tenants/${lenovo}/apps/${appkey}/service/two-factor-auth/ad/token`;
    let password1 = new Buffer(this.password).toString('base64');
    console.log('password1==========' + 　password1);
    let password2 = new Buffer(password1).toString('base64');
    this.password_encryption = password2;
    let otpCodeData = { type: "JS", username: this.username, password: this.password_encryption, otpCode: this.otpCode };
    console.log(url);
    console.log('otpCodeData==' + JSON.stringify(otpCodeData));
    this.http.post(url, JSON.stringify(otpCodeData), { headers: this.headers })
      .timeout(AppConfig.getTimeout())
      .subscribe(response => {
        console.log(response);
        console.log(response.json());
        let OtpRes = response.json();
        loading.dismiss();
        if (OtpRes.token && OtpRes.token.length > 0) {
          localStorage['session_token'] = OtpRes.token;
          console.log('localStorage' + localStorage['session_token']);
          localStorage['username'] = this.username;
          localStorage['password'] = this.password;
          localStorage['remember'] = this.rememberMe;
          AppConfig.setToken(localStorage['session_token']);
          //PIN number check timeout
          // this.homeService.timeCount();
          this.navCtrl.setRoot(HomePage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Invalid otpCode',
            buttons: ['OK']
          });
          alert.present();
        }
      }, err => {
        console.log('otpCode' + err);
        let OtpRes = JSON.stringify(err);
        console.log(OtpRes);
        //
        let alert = this.alertCtrl.create({
          title: 'otpCode server not available',
          subTitle: OtpRes,
          buttons: ['OK']
        });
        alert.present();
        loading.dismiss();
      }, () => {
        let status = JSON.stringify("otpCode complete");
        console.log(status);
        // loading.dismiss();
      });
  }
}
}*/
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_aboutus_aboutus__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_vision_vision__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nationaltax_nationaltax__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_domestictax_domestictax__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_my__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authtoken_authtoken__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nationaltax_nationaltax__["a" /* NationaltaxPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_domestictax_domestictax__["a" /* DomestictaxPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_my__["a" /* MyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my.module#MyPageModule', name: 'MyPage', segment: 'my', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nationaltax_nationaltax__["a" /* NationaltaxPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_domestictax_domestictax__["a" /* DomestictaxPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_my__["a" /* MyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_settings_settings__["a" /* SettingProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authtoken_authtoken__["a" /* AuthProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.getHostUrl = function () {
        var host = localStorage['hostname'];
        // let host = '10.120.21.224';
        console.log("host is :" + host);
        return "https://" + host;
    };
    AppConfig.getApiUrl = function () {
        var host = localStorage['hostname'];
        console.log("host is :" + host);
        return "https://" + host + "/api";
    };
    AppConfig.getToken = function () {
        return this.session_token;
    };
    AppConfig.getTimeout = function () {
        return 15000;
    };
    AppConfig.setToken = function (token) {
        this.session_token = token;
    };
    AppConfig.set_JWT_token = function (token) {
        this.JWT_token = token;
    };
    AppConfig.get_JWT_token = function () {
        return this.JWT_token;
    };
    AppConfig.session_token = "";
    AppConfig.JWT_token = "";
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';


/*
  Generated class for the SettingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SettingProvider = /** @class */ (function () {
    function SettingProvider() {
        // theme 是 BehaviorSubject实例
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingProvider.prototype.setActiveTheme = function (val) {
        // 改变值
        this.theme.next(val);
    };
    SettingProvider.prototype.getActiveTheme = function () {
        // 观察
        return this.theme.asObservable();
    };
    SettingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingProvider);
    return SettingProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';


/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPage = /** @class */ (function () {
    function MyPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.menuList = [];
        this.fileList = [];
        this.showHomeicon = false;
    }
    MyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuList = this.navParams.get('folderList');
        var id = this.navParams.get('id');
        this.menuList.forEach(function (item) {
            if (item.id == id) {
                _this.title = item.name;
            }
        });
        // if (id.length) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA5MzI2MDksImlhdCI6MTUyODM0MDYwOSwibmJmIjoxNTI4MzQwNjA5LCJpZGVudGl0eSI6MTN9.7_gFKp2vu6fV8nWzaGEoGN0F1JU0GQKR37qNO7macVo' });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */].getHostUrl() + '/sci/bdp/api/folder_sub?id=' + id, { headers: headers })
            .toPromise()
            .then(function (response) {
            _this.fileList = response.json().subs;
            _this.fileList.forEach(function (item) {
                if (item.type == "file") {
                    item['icon'] = "document";
                }
                else {
                    item['icon'] = "folder";
                }
            });
        })
            .catch(this.handleError);
        // }
    };
    MyPage.prototype.toHome = function () {
        this.navCtrl.popToRoot();
    };
    MyPage.prototype.openPage = function (title) {
        console.log('title', title);
    };
    MyPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyPage.prototype, "nav", void 0);
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/my/my.html"*/'<!--\n  Generated template for the MyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n      <ion-icon name="ios-arrow-down" *ngIf="isShow" (click)="isShow=!isShow"></ion-icon>\n      <ion-icon name="ios-arrow-forward" *ngIf="!isShow" (click)="isShow=!isShow"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="listStyle">\n  <ion-list no-lines *ngIf="isShow">\n    <button ion-item (click)="toHome()">\n      <ion-icon name="home" item-left class="Homeicon"></ion-icon>\n      Home\n    </button>\n    <button ion-item *ngFor="let p of menuList"  (click)="openPage(p.id)" >\n      {{p.name}}\n    </button>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let list of fileList">\n        <ion-list no-lines>\n          <ion-item>\n            <ion-icon name="{{list.icon}}" item-left color="danger"></ion-icon>\n            {{list.name}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/my/my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, settings, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.settings = settings;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.defaultTheme = true;
        this.checksTheme = false;
        this.initializeApp();
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'My folders', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], icon: 'folder' },
            { title: 'Contact us', component: '', icon: 'call' },
        ];
        this.footerpages = [
            { title: 'Settings', icon: 'settings' },
            { title: 'Logout', icon: 'power' },
        ];
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page.title);
        this.nav.setRoot(page.component);
        // if (footerpages.title == 'Logout'){
        //   localStorage['session_token'] = 'undefined';
        //   localStorage['username'] = 'undefined';
        //   localStorage['password'] = 'undefined';
        //   window.location.reload(true);
        // }
        // else{
        //   this.nav.setRoot(page.component);
        // }
    };
    MyApp.prototype.logOut = function (e) {
        console.log('this===', e);
        // localStorage['session_token'] = 'undefined';
        // localStorage['username'] = 'undefined';
        // localStorage['password'] = 'undefined';
        // window.location.reload(true);
        if (e == 'Logout') {
            localStorage['session_token'] = 'undefined';
            if (localStorage['remember'] == 'false') {
                localStorage['username'] = '';
                localStorage['password'] = '';
            }
            window.location.reload(true);
        }
    };
    MyApp.prototype.ThemeChange = function (e) {
        console.log('this1111.', e);
        console.log('this.', e.checked);
        console.log('selectedTheme.', this.selectedTheme);
        //light
        if (e.id == "checkbox-11-0" && this.selectedTheme === 'dark-theme' && e.checked) {
            this.settings.setActiveTheme('light-theme');
            this.checksTheme = false;
        }
        //dark
        if (e.id == "checkbox-12-0" && this.selectedTheme === 'light-theme' && e.checked) {
            this.settings.setActiveTheme('dark-theme');
            this.defaultTheme = false;
        }
        // if (this.selectedTheme === 'dark-theme' && e.checked ) {
        //   //改变
        //   this.settings.setActiveTheme('light-theme');
        // } else {
        //   this.settings.setActiveTheme('dark-theme');
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-app',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/app/app.html"*/'<ion-menu [content]="content"> \n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose="left" ion-item   *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-left class="iconColor"></ion-icon> \n        {{p.title}}\n      </button>\n      <ion-item >\n        <ion-icon name="shirt" item-left class="iconColor"></ion-icon> \n        Themes\n        <ion-icon name="ios-arrow-down" item-right *ngIf="isShow" (click)="isShow=!isShow"></ion-icon>\n        <ion-icon name="ios-arrow-forward" item-right *ngIf="!isShow" (click)="isShow=!isShow"></ion-icon>\n      </ion-item>\n      <ion-list *ngIf="isShow">\n        <ion-item>\n            <ion-label>Light</ion-label>\n            <ion-checkbox  [(ngModel)]="defaultTheme" (ionChange)="ThemeChange($event)"></ion-checkbox>\n        </ion-item>\n        <ion-item >\n            <ion-label>Dark</ion-label>\n            <ion-checkbox color="dark"  [(ngModel)]="checksTheme" (ionChange)="ThemeChange($event)"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n    \n  </ion-content>\n\n  <ion-footer>  \n    <div class="menu-footer">  \n        <ion-grid>  \n          <ion-row >  \n            <ion-col  *ngFor="let f of footerpages" >  \n             <button ion-button clear (click)="logOut(f.title)">  \n                <ion-icon name="{{f.icon}}" item-left class="changePadding iconColor" ></ion-icon>   \n                {{f.title}}  \n             </button>  \n            </ion-col>  \n          </ion-row>  \n        </ion-grid>  \n      </div>  \n</ion-footer>  \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map