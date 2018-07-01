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
            selector: 'page-home',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>CHNITS</ion-title>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button menuToggle icon-only>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-col>\n          <!--<ion-col>\n            <ion-chip #chip1>\n              <ion-label>Default</ion-label>\n              <button ion-button clear color="light" (click)="delete(chip1)">\n                <ion-icon name="close-circle"></ion-icon>\n              </button>\n            </ion-chip>\n            <ion-chip #chip2>\n              <ion-icon name="pin" color="primary"></ion-icon>\n              <ion-label>With Icon</ion-label>\n              <button ion-button (click)="delete(chip2)">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-chip>\n            <ion-chip #chip3>\n              <ion-avatar>\n                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\n              </ion-avatar>\n              <ion-label>With Avatar</ion-label>\n              <button ion-button clear color="dark" (click)="delete(chip3)">\n                <ion-icon name="close-circle"></ion-icon>\n              </button>\n            </ion-chip>\n          </ion-col>-->\n          <ion-col>\n            <button ion-button (click)="navTo(\'aboutus\')">jump new page</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="secondary">Secondary</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="danger">Danger</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="light">Light</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="dark">Dark</button>\n          </ion-col>\n\n          <ion-col>\n            <ion-searchbar\n                    [(ngModel)]="myInput"\n                    [showCancelButton]="shouldShowCancel"\n                    (ionInput)="onInput($event)"\n                    (ionCancel)="onCancel($event)">\n            </ion-searchbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png"  (click)="presentAboutusModal(\'aboutus\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              About US\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testA\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" (click)="presentAboutusModal(\'vision\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              Vision\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testB\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png"/>\n          <ion-card-content>\n            <ion-card-title>\n              TBD\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testC\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" (click)="navTo(\'nationaltax\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              National Tax\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testD\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png" (click)="navTo(\'domestictax\')"/>\n          <ion-card-content>\n            <ion-card-title>\n              Domestic tax\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testE\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="assets/imgs/taxfree.png"/>\n          <ion-card-content>\n            <ion-card-title>\n              Declaration information\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card>\n        testF\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n  <!--<ion-item class="files">\n    My BDP\n    <ion-icon name="ios-arrow-down" item-right *ngIf="isShow" (click)="isShow=!isShow"></ion-icon>\n    <ion-icon name="ios-arrow-forward" item-right *ngIf="!isShow" (click)="isShow=!isShow"></ion-icon>\n  </ion-item>\n  <ion-grid *ngIf="isShow">\n    <ion-row>\n      <ion-col *ngFor="let list of folderList" col-6>\n        <ion-list no-lines>\n          <ion-item (click) = "navTo(list.id)">\n            <ion-icon name="folder" item-left color="danger"></ion-icon>\n            {{list.name}}\n            <p><span *ngIf = "list.folder_count != \'0\'" >{{list.folder_count}}</span>&nbsp;folders&nbsp;&nbsp;<span *ngIf = "list.dashboard_count !=\'0\'">{{list.dashboard_count}}&nbsp;dashboards</span></p>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n  <!--<ion-item class="chart">\n    <div #EchartsContent  class="EchartsDiv"></div>\n  </ion-item>-->\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!!</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/home/home.html"*/
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
            selector: 'page-vision',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/vision/vision.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>vision</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      CHNITS\'s Vision\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-card-title>\n        Vison\n      </ion-card-title>\n      <p>\n        XXXXXXXXX.\n      </p>\n    </ion-card-content>\n    <img src="assets/imgs/taxfree.png"/>\n  </ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/vision/vision.html"*/
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
            selector: 'page-nationaltax',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/nationaltax/nationaltax.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>National Tax</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar>\n          title\n        </ion-searchbar>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n            hahahahahhahahahhahahahahahhahahhahahahahahhahahahah\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/nationaltax/nationaltax.html"*/
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
            selector: 'page-domestictax',template:/*ion-inline-start:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/domestictax/domestictax.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Domestic Tax</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar>\n          title\n        </ion-searchbar>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n            hahahahahhahahahhahahahahahhahahhahahahahahhahahahah\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>contact us!!! Tel :XXXXXXXXX</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/geekerwu/Desktop/TaxProject/website/src/pages/domestictax/domestictax.html"*/
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