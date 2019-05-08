import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { EditVehicleService } from './edit-vehicle.service';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  userId: string;
  urlSearchParams:URLSearchParams;
  totalSeats=[];
  carForm:FormGroup;
  bikeForm:FormGroup;
  @Input() vehicle:any;
  @Output()
  showEditVehicleForm = new EventEmitter<string>();

  constructor(private editVehicleService:EditVehicleService) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.urlSearchParams = new URLSearchParams();
    this.setTotalSeats();
    this.carForm = new FormGroup({
      model: new FormControl(this.vehicle.model,Validators.required),
      registrationNo : new FormControl(this.vehicle.regno,Validators.required),
      fare : new FormControl(this.vehicle.fare,Validators.required),
      capacity : new FormControl(this.vehicle.capacity,Validators.required),
      features : new FormControl('',Validators.required),
      category : new FormControl(this.vehicle.makeAndCategory,Validators.required),
    });

    this.bikeForm = new FormGroup({
      model: new FormControl(this.vehicle.model,Validators.required),
      registrationNo : new FormControl(this.vehicle.regno,Validators.required),
      fare : new FormControl(this.vehicle.fare,Validators.required),
      capacity : new FormControl(this.vehicle.capacity,Validators.required),
      features : new FormControl('',Validators.required),
      category : new FormControl(this.vehicle.makeAndCategory,Validators.required),
    });
  }
//Set total seats for vehicle
  setTotalSeats(){
    for(var i=1;i<=6;i++){
      this.totalSeats[i-1] = i;
    }
  }
  //Edit a vehicle
  editVehicle(){
    this.urlSearchParams = new URLSearchParams();
    this.urlSearchParams.append('vehicleId',this.vehicle.id);
    this.urlSearchParams.append('ownerid',this.userId.toString());
    this.urlSearchParams.append('model',this.carForm.value.model);
    this.urlSearchParams.append('regno',this.carForm.value.registrationNo);
    this.urlSearchParams.append('capacity',this.carForm.value.capacity);
    this.urlSearchParams.append('fare',this.carForm.value.fare);
    this.urlSearchParams.append('vehicleType',this.vehicle.vehicleType);
    this.urlSearchParams.append('makeAndCategory',this.carForm.value.category);
    this.urlSearchParams.append('additionalFacilities',this.carForm.value.features);
    
    this.editVehicleService.editVehicle(this.urlSearchParams)
      .subscribe(
        (response) => {
          console.log(response.json());
          alert("Updated !");
          this.showEditVehicleForm.emit("false");
        },
        (error) => {
          alert(error.json().resultData.userMsg);
          console.log(error);
        }
      );
  }

}
