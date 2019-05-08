import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowVehicleService } from './show-vehicles.service';
import { URLSearchParams } from '@angular/http';


@Component({
  selector: 'app-show-vehicles',
  templateUrl: './show-vehicles.component.html',
  styleUrls: ['./show-vehicles.component.scss'],
  animations: [routerTransition()]
})
export class ShowVehiclesComponent implements OnInit {

  currentVehicle: any;
  @Output()
  vehicleToBeEdited = new EventEmitter<string>();

  showEditVehicleForm:boolean;
  userId: any;
  urlSearchParams: any;
  constructor(public showVehicleService: ShowVehicleService) { }
  vehicleList = [];

  ngOnInit() {
    this.showEditVehicleForm=false;
    this.urlSearchParams = new URLSearchParams();
    this.getLocalData();
    // console.log(this.userId);

    this.getVehicles();
  }
  getLocalData() {
    this.userId = localStorage.getItem("userId");
    console.log(this.vehicleList);
  }
  getVehicles() {
    this.urlSearchParams = new URLSearchParams();
    this.urlSearchParams.append('userId', this.userId.toString());

    this.showVehicleService.getVehicle(this.userId)
      .subscribe(
        (data) => {
          this.vehicleList = data.json().resultData;
          console.log('register vehical '+JSON.stringify(this.vehicleList));
        },
        (error) => {
          alert(error.json().resultData.userMsg);
        }
      );
  }
  editVehicle(vehicle) {
    this.currentVehicle = vehicle;
    this.showEditVehicleForm=true;

  }

  deleteVehicle(vehicle) {
    var confirmation = confirm("Do you want to delete this vehicle ?");
    if (confirmation) {
    //  console.log(vehicle);
    this.urlSearchParams = new URLSearchParams();
      this.urlSearchParams.append('id',vehicle.id);
      this.urlSearchParams.append('ownerid', this.userId.toString());
      this.urlSearchParams.append('model', vehicle.model);
      this.urlSearchParams.append('regno', vehicle.registrationNo);
      this.urlSearchParams.append('capacity', vehicle.capacity);
      this.urlSearchParams.append('fare', vehicle.fare);
      // this.urlSearchParams.append('vehicleType','Car');
      this.urlSearchParams.append('makeAndCategory', vehicle.category);
      this.urlSearchParams.append('status', "inactive");
      this.showVehicleService.deleteVehicle(this.urlSearchParams)
        .subscribe(
          (response) => {
          //  console.log(response.json());
            this.getVehicles();
            alert("Deleted !");
          },
          (error) => {
            alert(error.json().resultData.userMsg);
            console.log(error);
          }
        );
    }

  }
  editCompleteStatus(event){
    this.showEditVehicleForm = JSON.parse(event);
    console.log(this.showEditVehicleForm);
    this.getVehicles();
  }
  setDefaultVehicle(vehicle){
    console.log("Default Vehicle Set");
  }
}
