"use strict";
/**
 * Created by ZT on 2016/7/26.
 */
var router_1 = require('@angular/router');
var home_component_1 = require('./component/home.component');
var view1_component_1 = require("./component/view1.component");
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'view1',
        component: view1_component_1.View1Component
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map