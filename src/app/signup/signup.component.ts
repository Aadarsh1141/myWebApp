import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { SignUp } from './signup-model';
import { HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ReferralCodeComponent } from './referral-code/referral-code.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signUpDetails;
  phone: string;
  name: string;
  showPromoCode:boolean = true;
  countryCode: string;
  referralCodeValue: string;
  constructor(private signupService: SignupService,
    private dialog: MatDialog, public router: Router) { }

  ngOnInit() {
    this.countryCode = decodeURI("%2B91");
    this.signupForm = new FormGroup({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }
  //Signup Form submission
  onSubmit() {
    let uuid = UUID.UUID();
    this.name = this.signupForm.value.name;
    this.phone = this.signupForm.value.phone;
    localStorage.setItem("name", this.name);
    localStorage.setItem("password", this.signupForm.value.password);
    localStorage.setItem("phone", this.phone);
    localStorage.setItem("uuid", uuid);

    var urlSearchParams = new URLSearchParams()
    urlSearchParams.append('phone', this.signupForm.value.phone);
    urlSearchParams.append('pwd', this.signupForm.value.password);
    urlSearchParams.append('name', this.signupForm.value.name);
    urlSearchParams.append('email', this.signupForm.value.email);
    urlSearchParams.append('gender', this.signupForm.value.gender);
    urlSearchParams.append('status', 'REGISTERED');
    //urlSearchParams.append('countryCode', '2B91');
    urlSearchParams.append('referralCode', this.referralCodeValue);
    urlSearchParams.append('androidAppVersionName', '6.50');
    urlSearchParams.append('appName', 'Quick Ride');
    urlSearchParams.append('deviceUniqueId', uuid);
    this.signupService.checkSignup(urlSearchParams)
      .subscribe(
        (response) => {
          localStorage.setItem("userName", this.signupForm.value.name);
          localStorage.setItem("phone", this.signupForm.value.phone);
          this.router.navigateByUrl('/activate-account');
        },
        (error) => {
          alert(error.json().resultData.userMsg);
        }
      );
    //this.router.navigateByUrl('/activate-account');
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  referralCode() {
    const dialogRef = this.dialog.open(ReferralCodeComponent, {
      width: '600px',
    });

    const sub = dialogRef.componentInstance.onApply.subscribe((data: any) => {
      console.log("data is ", data); ///gives the response
      if (data) {
        this.referralCodeValue = data;
        this.showPromoCode = false;
      } else {
        this.referralCodeValue = '';
      }
      dialogRef.close();
    });
  }
}
