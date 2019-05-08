import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatStepper } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { PreferencesService } from './preferences.services';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  name: string;
  startTime: string;
  mm: any;
  HH: any;
  yyyy: string;
  MM: any;
  dd: any;
  currentTime: Date;
  showOrganizationSetup = true;
  organizationForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  editedRideTime: string;
  showAvatar = true;
  image: any;
  phone: any;
  password: any;
  uuid: any;
  showVerified = false;
  bgColor = '';
  bgColor1 = '';
  organizationName: string;
  emailAddress: string;
  starttime;
  endTime;
  pickLocation;
  dropLocation;
  ridePref;
  route;
  firstLetterOfName: string;
  showVerificationDetails: boolean;

  constructor(private snackBar: MatSnackBar, private preferencesService: PreferencesService,
    private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.name = (localStorage.getItem('name'));
    this.phone = (localStorage.getItem('phone'));
    this.password = (localStorage.getItem('password'));
    this.uuid = (localStorage.getItem('uuid'));
    var firstName = this.name.split(' ');
    this.name = firstName[0];
    this.firstLetterOfName = this.name.toString().charAt(0);
    this.organizationForm = new FormGroup({
      organizationName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required)
    });

    this.firstFormGroup = new FormGroup({
      pickLocation: new FormControl('', Validators.required),
      dropLocation: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required)
    });
    this.secondFormGroup = new FormGroup({

    });
    this.thirdFormGroup = new FormGroup({
      activationCode: new FormControl('', Validators.required)
    });
    if (localStorage.getItem('verification') == 'verified') {
      this.showVerified = true;
      this.showVerificationDetails = false;
    }
  }

  skip() {
    this.showOrganizationSetup = false;
  }

  setupOrganization() {
    var oragnizationName = (document.getElementById('organizationName') as HTMLInputElement);
    var emailAddress = (document.getElementById('emailAddress') as HTMLInputElement);
    if (oragnizationName.value !== '' && emailAddress.value !== '') {
      this.organizationName = this.organizationForm.value.organizationName;
      this.emailAddress = this.organizationForm.value.emailAddress;
      console.log("email", this.organizationName, this.emailAddress);
      this.showOrganizationSetup = false;
    } else {
      this.openSnackBar("Fields are mandatory!", "");
    }
  }

  back() {
    this.showOrganizationSetup = true;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    })
  }

  getStartTime() {
    this.dd = this.addTrailingZeroToDate(this.currentTime.getDate());
    this.MM = this.addTrailingZeroToDate(this.currentTime.getMonth() + 1);
    this.yyyy = this.currentTime.getFullYear().toString();
    this.HH = this.addTrailingZeroToDate(this.currentTime.getHours());
    this.mm = this.addTrailingZeroToDate(this.currentTime.getMinutes());

    this.startTime = (this.dd + this.MM + this.yyyy + this.HH + this.mm);

    this.dd = this.addTrailingZeroToDate(this.currentTime.getUTCDate());
    this.MM = this.addTrailingZeroToDate(this.currentTime.getUTCMonth() + 1);
    this.yyyy = this.currentTime.getUTCFullYear().toString();
    this.HH = this.addTrailingZeroToDate(this.currentTime.getUTCHours());
    this.mm = this.addTrailingZeroToDate(this.currentTime.getUTCMinutes());

    this.editedRideTime = (this.dd + this.MM + this.yyyy + this.HH + this.mm);
  }

  addTrailingZeroToDate(unit) {
    unit = unit > 9 ? unit : '0' + unit;
    return unit.toString();

  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        var url = event.target.result;
        let x = url.split(",");
        this.image = x[1];
        this.showAvatar = false;
      }
    }
  }

  login() {
   this.router.navigateByUrl('/login');
  }
  color = 'blue';
  selectedRoute() {
    this.color = 'green';
    this.color1 = 'blue';
    this.route = 'office-home';
  }

  color1 = 'blue';
  selectedRoute1() {
    this.color1 = 'green';
    this.color = 'blue';
    this.route = 'home-office';
  }

  buttonColor;
  buttonColor1;

  offerRide() {
    this.bgColor1 = 'green';
    this.bgColor = '';
    this.buttonColor = '#000';
    this.buttonColor1 = '#fff';
    this.ridePref = 'offerRide';
  }

  takeRide() {
    this.bgColor = 'green';
    this.buttonColor = '#fff';
    this.buttonColor1 = '#000';
    this.bgColor1 = '';
    this.ridePref = 'takeRide';
  }


  addPref(stepper: MatStepper) {
    var options = { hour12: false, hour: '2-digit', minute: '2-digit' };
    console.log("start time", this.firstFormGroup.value.start_time.toLocaleTimeString('en-US', options), this.firstFormGroup.value.end_time.toLocaleTimeString('en-US', options));
    console.log("val", this.ridePref, this.route);

    stepper.next();
  }

  addImage(stepper: MatStepper) {
    console.log("image", this.image);
    this.preferencesService.saveImage(this.image, this.phone)
      .subscribe(data => {
        console.log("data after save image", JSON.stringify(data));

      })
    //stepper.next();
  }
  
  verifyNow() {
    this.showVerified = true;
    this.showVerificationDetails = true;
  }


}
