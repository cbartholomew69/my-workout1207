webpackJsonp([0],{

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_workout_add_workout__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workouts_workouts__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__workouts_workouts__["a" /* WorkoutsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__add_workout_add_workout__["a" /* AddWorkoutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christy/Desktop/angular2/myworkouts/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Workouts" tabIcon="pulse"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="AddWorkout" tabIcon="add"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"/Users/christy/Desktop/angular2/myworkouts/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/christy/Desktop/angular2/myworkouts/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pa">\n  <p>This app to designed to keep track of your workout programs</p>\n</ion-content>\n'/*ion-inline-end:"/Users/christy/Desktop/angular2/myworkouts/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_workout_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workouts_workouts__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddWorkoutPage = (function () {
    function AddWorkoutPage(navCtrl, workoutService) {
        this.navCtrl = navCtrl;
        this.workoutService = workoutService;
    }
    AddWorkoutPage.prototype.onSubmit = function () {
        var _this = this;
        // console.log('adding workout');
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        };
        //Add workout
        this.workoutService.addWorkout(workout).subscribe(function (data) {
            _this.result = data;
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workouts_workouts__["a" /* WorkoutsPage */]);
    };
    AddWorkoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-workout',template:/*ion-inline-start:"/Users/christy/Desktop/angular2/myworkouts/src/pages/add-workout/add-workout.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Add Workout\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="aw">\n    <form (submit)="onSubmit()">\n      <ion-list>\n      <ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input [(ngModel)]="title" name="title" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Note</ion-label>\n        <ion-input [(ngModel)]="note" name="note" type="textarea"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Type</ion-label>\n        <ion-select [(ngModel)]="type" name="type">\n          <ion-option value="Jogging">Jogging</ion-option>\n          <ion-option value="Free Weights">Free Weights</ion-option>\n          <ion-option value="Elliptical">Elliptical</ion-option>\n          <ion-option value="Krav-Maga">Krav-Maga</ion-option>\n          <ion-option value="Aerobics">Aerobics</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item>\n        <button ion-button type="submit" block>Add Workout</button>\n      </ion-item>\n      </ion-list>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"/Users/christy/Desktop/angular2/myworkouts/src/pages/add-workout/add-workout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_workout_service__["a" /* WorkoutService */]])
    ], AddWorkoutPage);
    return AddWorkoutPage;
}());

//# sourceMappingURL=add-workout.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_workout_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workouts_workouts__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutDetailsPage = (function () {
    function WorkoutDetailsPage(navCtrl, params, workoutService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.workoutService = workoutService;
        this.workout = params.get('workout');
    }
    WorkoutDetailsPage.prototype.deleteWorkout = function (workoutId) {
        var _this = this;
        this.workoutService.deleteWorkout(workoutId).subscribe(function (data) {
            _this.result = data;
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workouts_workouts__["a" /* WorkoutsPage */]);
    };
    WorkoutDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'workout-details',template:/*ion-inline-start:"/Users/christy/Desktop/angular2/myworkouts/src/pages/workout-details/workout-details.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Workout Details\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="wd">\n      <ion-card>  \n        <ion-card-header>\n          <strong>{{workout.title}}</strong>\n        </ion-card-header>\n        <ion-card-content>\n          <p><strong>Type: </strong> {{workout.type}}</p>\n          <hr>\n          {{workout.note}}\n          <br><br><br>\n          <button ion-button color="danger" (click)="deleteWorkout(workout._id.$oid)">Delete Workout</button>\n        </ion-card-content>\n      </ion-card> \n  </ion-content>\n  '/*ion-inline-end:"/Users/christy/Desktop/angular2/myworkouts/src/pages/workout-details/workout-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_workout_service__["a" /* WorkoutService */]])
    ], WorkoutDetailsPage);
    return WorkoutDetailsPage;
}());

//# sourceMappingURL=workout-details.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_workout_add_workout__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_workout_details_workout_details__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_workout_add_workout__["a" /* AddWorkoutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["a" /* WorkoutsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_workout_details_workout_details__["a" /* WorkoutDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_workout_add_workout__["a" /* AddWorkoutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["a" /* WorkoutsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_workout_details_workout_details__["a" /* WorkoutDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_workout_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christy/Desktop/angular2/myworkouts/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/christy/Desktop/angular2/myworkouts/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_workout_service__["a" /* WorkoutService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutService = (function () {
    function WorkoutService(http) {
        this.http = http;
        this.apiKey = 'X5s0aiXu_heBS0me48AIF4DiQ2Rx36Cn';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts_dev/collections/workouts';
    }
    WorkoutService.prototype.getWorkouts = function () {
        return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    WorkoutService.prototype.addWorkout = function (workout) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkoutService.prototype.deleteWorkout = function (workoutId) {
        return this.http.delete(this.workoutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    WorkoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WorkoutService);
    return WorkoutService;
}());

//# sourceMappingURL=workout.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_workout_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_details_workout_details__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutsPage = (function () {
    function WorkoutsPage(navCtrl, workoutService) {
        this.navCtrl = navCtrl;
        this.workoutService = workoutService;
    }
    WorkoutsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.workoutService.getWorkouts().subscribe(function (workouts) {
            _this.workouts = workouts;
            // console.log(workouts);
        });
    };
    WorkoutsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.workoutService.getWorkouts().subscribe(function (workouts) {
            _this.workouts = workouts;
        });
    };
    WorkoutsPage.prototype.workoutSelected = function (event, workout) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_details_workout_details__["a" /* WorkoutDetailsPage */], {
            workout: workout
        });
    };
    WorkoutsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'workouts',template:/*ion-inline-start:"/Users/christy/Desktop/angular2/myworkouts/src/pages/workouts/workouts.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Workouts\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="wo">\n    <ion-list>\n      <ion-item *ngFor="let workout of workouts"(click)="workoutSelected($event, workout)">\n        {{workout.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/christy/Desktop/angular2/myworkouts/src/pages/workouts/workouts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_workout_service__["a" /* WorkoutService */]])
    ], WorkoutsPage);
    return WorkoutsPage;
}());

//# sourceMappingURL=workouts.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map