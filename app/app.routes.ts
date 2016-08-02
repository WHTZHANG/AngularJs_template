/**
 * Created by ZT on 2016/7/26.
 */
import { provideRouter,RouterConfig } from '@angular/router';
import { HomeComponent } from './component/home.component';
import {View1Component} from "./component/view1.component";



const routes : RouterConfig = [    //路由定义数组
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path : 'view1',
        component : View1Component
    }
    // {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    // },
];

export const appRouterProviders = [
    provideRouter(routes)
];