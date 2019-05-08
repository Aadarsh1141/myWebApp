import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { URLSearchParams } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { MapComponent } from '../layout/dashboard/components';
import { NgMapApiLoader, DirectionsRenderer } from '@ngui/map';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    urlSearchParams;
    loginForm: FormGroup;
    countryCode: string;
    userId;
    showLoader: boolean = false;
    directionsRenderer: google.maps.DirectionsRenderer;
    @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

    constructor(public router: Router, public loginService: LoginService, private mapsApiLoader: NgMapApiLoader) { }

    ngOnInit() {
        this.urlSearchParams = new URLSearchParams();
        this.loginForm = new FormGroup({
            phone: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    loginUser() {
        this.showLoader = true;
        let uuid = UUID.UUID();
        var userId = this.loginForm.value.phone;
        var pwd = this.loginForm.value.password;
        var urlSearchParams = new URLSearchParams()
        urlSearchParams.append('userId', userId);
        urlSearchParams.append('pwd', pwd);
        this.loginService.login(urlSearchParams)
            .subscribe(
                (data) => {
                    this.showLoader = false;
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('userId', data.json().resultData.phone);
                    localStorage.setItem('name', data.json().resultData.name);
                    this.userId = data.json().resultData.phone;
                    this.getUserData();
                    if (this.checkIfNewUser()) {
                        this.router.navigateByUrl('/ride-profile');
                    }
                    else {
                        this.router.navigateByUrl('/dashboard');
                    }
                },
                (error) => {
                    alert(error.json().resultData.userMsg);
                    console.log(error);
                }
            );
    }
    getUserData() {
        this.loginService.getUser(this.userId)
            .subscribe(data => {
                localStorage.setItem('RiderProfile', JSON.stringify(data.json().resultData));
            })
    }

    checkIfNewUser() {
        return JSON.parse(localStorage.getItem("newUser"));
    }

    //Phone number validation
    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

}
