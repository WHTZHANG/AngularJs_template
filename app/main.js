"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_routes_1.appRouterProviders
]); // (引导函数) AppComponent 应用根组件
//index.html 中引用了systemjs.config.js，其中引入了main     index.html 中 System.import 告诉 SystemJS 引入 main 文件
//main.ts 只是一个快速起步而已，本来可放入app.component.ts 中，但是应该正确组织Augular应用文件结构，所以独立出来
//# sourceMappingURL=main.js.map