import { bootstrap } from  '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app.routes';


bootstrap( AppComponent,[
    HTTP_PROVIDERS,
    appRouterProviders
] );   // (引导函数) AppComponent 应用根组件


//index.html 中引用了systemjs.config.js，其中引入了main     index.html 中 System.import 告诉 SystemJS 引入 main 文件

//main.ts 只是一个快速起步而已，本来可放入app.component.ts 中，但是应该正确组织Augular应用文件结构，所以独立出来
