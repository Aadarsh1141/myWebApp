import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterVehicleService } from './register-vehicle.service';
import { URLSearchParams } from '@angular/http';
import { ShowVehiclesComponent } from './show-vehicles/show-vehicles.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.scss'],
  animations: [routerTransition()]
})
export class RegisterVehicleComponent implements OnInit {

  userId: any;

  showBikeForm: boolean;
  showCarForm: boolean;

  urlSearchParams: any;
  totalSeats = [];
  carForm: FormGroup;
  bikeForm: FormGroup;
  showVehicle: boolean;
  vehicle = {};

  @ViewChild(ShowVehiclesComponent)
  private vehicleComponent: ShowVehiclesComponent;

  constructor(public registerVehicleService: RegisterVehicleService) { }

  ngOnInit() {
    this.showVehicle = false;
    this.setTotalCarSeats();
    this.urlSearchParams = new URLSearchParams();
    this.showCarForm = true;
    this.showBikeForm = false;
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    //  this.getVehicle();

    this.carForm = new FormGroup({
      model: new FormControl('', Validators.required),
      registrationNo: new FormControl('', Validators.required),
      fare: new FormControl(3, Validators.required),
      capacity: new FormControl(4, Validators.required),
      features: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });

    this.bikeForm = new FormGroup({
      model: new FormControl('', Validators.required),
      registrationNo: new FormControl('', Validators.required),
      fare: new FormControl(3, Validators.required),
      capacity: new FormControl(1, Validators.required),
      features: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
  }

  setTotalCarSeats() {
    for (var i = 1; i <= 6; i++) {
      this.totalSeats[i - 1] = i;
    }
  }
  //Submit Car Form
  registerCar() {
    //alert("Hi");
    console.log(this.carForm.value);
    if (this.carForm.value.model == '' ||
      this.carForm.value.registrationNo == '' ||
      this.carForm.value.capacity == '' ||
      this.carForm.value.fare == ''
    ) {
      alert("Please fill all fields !");
    }
    else {
      this.urlSearchParams = new HttpParams()
        .set('OWNER_ID', this.userId)
        .set('MODEL', this.carForm.value.model)
        .set('REG_NO', this.carForm.value.registrationNo)
        .set('CAPACITY', this.carForm.value.capacity)
        .set('FARE', this.carForm.value.fare)
        .set('VEHICLE_TYPE', 'Car')
        .set('MAKE_AND_CATEGORY', this.carForm.value.category)
      this.registerVehicleService.registerVehicle(this.urlSearchParams)
        .subscribe(
          (data) => {
            console.log(data.json());
            alert("Added Car !");
          },
          (error) => {
            alert(error.json().resultData.userMsg);
            console.log(error);
          }
        );
    }

  }

  //Register Bike Form
  registerBike() {
    if (this.bikeForm.value.model == '' ||
      this.bikeForm.value.registrationNo == '' ||
      this.bikeForm.value.capacity == '' ||
      this.bikeForm.value.fare == ''
    ) {
      alert("Please fill all fields !");
    }
    else {
      this.urlSearchParams = new HttpParams()
        .set('model', this.bikeForm.value.model)
        .set('regno', this.bikeForm.value.registrationNo)
        .set('ownerid', this.userId)
        .set('capacity', this.bikeForm.value.capacity)
        .set('fare', this.bikeForm.value.fare)
        .set('vehicleType', 'Bike')
        .set('makeAndCategory', this.bikeForm.value.category)

      this.registerVehicleService.registerVehicle(this.urlSearchParams)
        .subscribe(
          (data) => {
            console.log(data.json());
            alert("Added Bike");
          },
          (error) => {
            alert(error.json().resultData.userMsg);
          }
        );
    }
  }


  enableCarForm() {
    this.showCarForm = true;
    this.showBikeForm = false;
  }
  enableBikeForm() {
    this.showCarForm = false;
    this.showBikeForm = true;
  }

  showVehicles() {
    this.showVehicle = true;
  }
  //Toggle between tabs
  onSelectTabChange(event) {
    if (event.index == 2) {
      this.vehicleComponent.getVehicles();
    }
  }
}
