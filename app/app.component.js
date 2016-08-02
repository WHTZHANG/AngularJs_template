"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('./rxjs-extensions');
//routerLink 告诉路由 点击时跳转到哪个页面  /heroes 指向 HeroesComponent
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.initMenu(this.ul.nativeElement);
    };
    AppComponent.prototype.initMenu = function (SIDEBAR_MENU) {
        $(SIDEBAR_MENU).find('a').on('click', function (ev) {
            var $li = $(this).parent();
            if ($li.is('.active')) {
                $li.removeClass('active active-sm');
                $('ul:first', $li).slideUp(function () {
                    // setContentHeight();
                });
            }
            else {
                // prevent closing menu if we are on child menu
                if (!$li.parent().is('.child_menu')) {
                    $(SIDEBAR_MENU).find('li ul').slideUp();
                }
                $(SIDEBAR_MENU).find('li').removeClass('active active-sm');
                $li.addClass('active');
                $('ul:first', $li).slideDown(function () {
                    // setContentHeight();
                });
            }
        });
    };
    ;
    __decorate([
        core_1.ViewChild('sideMenu'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "ul", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/view/navigation/navigation.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map