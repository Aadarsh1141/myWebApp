import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { EcoMeterComponent } from './eco-meter/eco-meter.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SuspendAccountComponent } from './suspend-account/suspend-account.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile;
  riderRides;
  passengerRides;
  totalRides;
  gender: string;
  userProfile: any;
  showVerify: boolean = true;
  constructor(private dialog: MatDialog) { }

  // Get Rider details
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem("RiderProfile"));
    if (this.profile.gender == 'M') {
      this.gender = 'Male';
    } else if (this.profile.gender == 'F') {
      this.gender = 'Female';
    } else {
      this.gender = "Can't say";
    }
    this.userProfile = JSON.parse(localStorage.getItem('riderUserProfile'));
    console.log("User profile is", JSON.stringify(this.userProfile));
    if (this.userProfile.paramsMap.officeemail === null && this.userProfile.paramsMap.companyname === null && this.userProfile.paramsMap.profession === null) {
      this.showVerify = true;
    } else {
      this.showVerify = false;
    }
    this.riderRides = this.userProfile.noofridesasrider;
    this.passengerRides = this.userProfile.noofridesaspassenger;
    this.totalRides = this.riderRides + this.passengerRides;
  }

  ecoMeter() {
    const dialogRef = this.dialog.open(EcoMeterComponent, {
      width: '450px',
      data: { profile: this.profile }
    });
  }
  setHomeLocation() { }
  setOfficeLocation() { }
  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '350px',
    });

    const sub = dialogRef.componentInstance.onChangePassword.subscribe((data: any) => {
      if (data) {
        dialogRef.close();
      }
    });
  }
  suspendAccount() {
    const dialogRef = this.dialog.open(SuspendAccountComponent, {
      width: '350px',
    });

    const sub = dialogRef.componentInstance.onSuspend.subscribe((data: any) => {
      if (data) {
        dialogRef.close();
      }
    });
  }
}
