import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    loggedIn: string;
    pushRightClass: string = 'push-right';
    userType:string;
    mobileQuery: MediaQueryList;

    // fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

    // fillerContent = Array(50).fill(0).map(() =>
    //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

    // private _mobileQueryListener: () => void;

    // constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
    //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //   this.mobileQuery.addListener(this._mobileQueryListener);
    // }

    // ngOnDestroy(): void {
    //   this.mobileQuery.removeListener(this._mobileQueryListener);
    // }
    //    ngOnInit() {
    //     this.loggedIn = localStorage.getItem("isLoggedin");

    //     if(this.loggedIn==='true'){
    //         this.userType='Guest';
    //     }

    // }

    // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

    constructor(private translate: TranslateService, public router: Router) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.loggedIn = localStorage.getItem("isLoggedin");

        if(this.loggedIn==='true'){
            this.userType='Guest';
        }

    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
