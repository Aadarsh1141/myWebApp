import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivateAccountService } from './activate-account.service';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
  animations: [routerTransition()]
})
export class ActivateAccountComponent implements OnInit {

  phone: any;
  urlSearchParams;
  activateAccountForm: FormGroup;

  constructor(public router: Router, public activateAccountService: ActivateAccountService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.urlSearchParams = new URLSearchParams();
    this.activateAccountForm = new FormGroup({
      activationCode: new FormControl('', Validators.required)
    });
    this.phone = parseInt(localStorage.getItem("phone"));
  }
  //Activate User Account
  activate() {
    this.activateAccountService.checkActivation(this.phone, this.activateAccountForm.value.activationCode)
      .subscribe(
        (data) => {
          localStorage.setItem("newUser", "true");
          this.router.navigateByUrl('/preferences');
          localStorage.setItem('verification', 'verified');
        },
        (error) => {
          alert(error.json().resultData.userMsg);
          console.log(error)
        }
      );
     // this.router.navigateByUrl('/preferences');

  }
  resendCode() {
    var urlSearchParams = new URLSearchParams();
    urlSearchParams.append('phone',this.phone);
    urlSearchParams.append('appName','Quick Ride');
    this.activateAccountService.resendActivationCode(urlSearchParams)
      .subscribe(
        (data) => {
          this.openSnackBar("Activation code sent to your phone !", '', 3000);
        },
        (error) => {
          alert(error.json().resultData.userMsg);
        }
      );

  }
  openSnackBar(message: string, action: string, time) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

  /*skip() {
    this.router.navigateByUrl('/preferences');
    localStorage.setItem('verification', 'verified');
  }*/
}
