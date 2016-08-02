import {Component, ViewChild, ElementRef, AfterViewInit}       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './component/home.component'
import './rxjs-extensions';
declare var $:any;
//routerLink 告诉路由 点击时跳转到哪个页面  /heroes 指向 HeroesComponent
@Component({
    selector : 'my-app',
    templateUrl : 'app/view/navigation/navigation.html',
    directives :[ROUTER_DIRECTIVES]
})

export class AppComponent implements AfterViewInit {


    @ViewChild('sideMenu') ul: ElementRef;

    ngAfterViewInit(){
        this.initMenu(this.ul.nativeElement);
    }

    initMenu(SIDEBAR_MENU : any){
        $(SIDEBAR_MENU).find('a').on('click', function(ev:any) {
            var $li = $(this).parent();

            if ($li.is('.active')) {
                $li.removeClass('active active-sm');
                $('ul:first', $li).slideUp(function() {
                    // setContentHeight();
                });
            } else {
                // prevent closing menu if we are on child menu
                if (!$li.parent().is('.child_menu')) {

                    $(SIDEBAR_MENU).find('li ul').slideUp();
                }
                $(SIDEBAR_MENU).find('li').removeClass('active active-sm');
                $li.addClass('active');

                $('ul:first', $li).slideDown(function() {
                    // setContentHeight();
                });
            }
        });
    };
}

