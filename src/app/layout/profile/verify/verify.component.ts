import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import { VerifyService } from './verify.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  urlSearchParams: URLSearchParams;
  verifyForm: FormGroup;
  userId;
  userProfile;
  name;
  phone;
  gender;
  profile: any;
  constructor(private verifyService: VerifyService, public snackBar: MatSnackBar, private router: Router) { }


  ngOnInit() {
    this.urlSearchParams = new URLSearchParams();
    this.profile = JSON.parse(localStorage.getItem("RiderProfile"));
    this.name = this.profile.name; //Get User Name
    this.phone = this.profile.contactNoOfUserWithCountryCode;
    this.userId = JSON.parse(localStorage.getItem("userId"));
    this.gender = this.profile.gender;
    //For signed in users
    if (localStorage.getItem("riderUserProfile")) {
      this.userProfile = JSON.parse(localStorage.getItem("riderUserProfile"));
     console.log(JSON.stringify(this.userProfile));
      this.name = this.userProfile.userName;
      this.verifyForm = new FormGroup({
        designation: new FormControl(this.userProfile.paramsMap.profession, Validators.required),
        company_name: new FormControl(this.userProfile.paramsMap.companyname, Validators.required),
        email: new FormControl(this.userProfile.paramsMap.officeemail, Validators.required),
        communicationEmail: new FormControl(this.userProfile.paramsMap.emailforcommunication, Validators.required),
      });
    }
    //For newly registered users
    else {
      this.verifyForm = new FormGroup({
        designation: new FormControl('', Validators.required),
        company_name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        communicationEmail: new FormControl('', Validators.required),
      });
    }


  }
  onSubmit() {
    console.log(this.verifyForm.value);
    this.urlSearchParams = new URLSearchParams();
    this.urlSearchParams.append("id", this.userId.toString());
    this.urlSearchParams.append("name", this.name);
    this.urlSearchParams.append('companyname', this.verifyForm.value.company_name);
    this.urlSearchParams.append('profession', this.verifyForm.value.designation);
    this.urlSearchParams.append("imageURI", null);


    this.urlSearchParams.append('officeemail', this.verifyForm.value.email);


    this.urlSearchParams.append("emailforcommunication", this.verifyForm.value.communicationEmail);
    this.urlSearchParams.append("facebook", null);
    this.urlSearchParams.append("twitter", null);
    this.urlSearchParams.append("linkedin", null);
    this.urlSearchParams.append("gender", this.gender.toString());

    this.verifyService.updateUser(this.urlSearchParams)
      .subscribe(
        (response) => {
          console.log(response.json());
          this.openSnackBar("Updated !", '');
          //If new user, then take them to the register vehicle page
          if (JSON.parse(localStorage.getItem("newUser"))) {

            localStorage.setItem("newUser", "false");
            this.router.navigateByUrl("/register-vehicle");
          }
          //If not a new user , send them back to dashboard
          else {
            this.router.navigateByUrl("/dashboard");
          }

        },
        (error) => {
          alert(error.json().resultData.userMsg);
          console.log(error.json().resultData.userMsg)
        }
      );
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }
}
