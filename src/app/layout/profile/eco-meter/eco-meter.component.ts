import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-eco-meter',
  templateUrl: './eco-meter.component.html',
  styleUrls: ['./eco-meter.component.scss']
})
export class EcoMeterComponent implements OnInit {

  profile:any;
  numberOfRide:any;
  riderRides:number = 0;
  passengerRides:number = 0;
  totalRides:number = 0;;
  co2amount:number = 0;
  distance:number = 0;
  amount:number = 0;
  constructor( public dialogRef: MatDialogRef<EcoMeterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("data in dialog", JSON.stringify(this.data));
    this.profile = this.data.profile;
    this.riderRides = this.profile.noofridesasrider;
    this.passengerRides = this.profile.noofridesaspassenger;
    this.totalRides = this.riderRides + this.passengerRides;
  }

}
