import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../../app/router.animations';
import { MyRidesService } from './my-rides.service';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.scss'],
  animations: [routerTransition()]
})
export class MyRidesComponent implements OnInit {

  userId: any;
  riderRideList: any = [];
  passangerRideList: any = [];
  activeRiderRideList: any = [];
  activePassangerRideList: any = [];
  constructor(private myRidesService: MyRidesService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userId'));
    if (this.userId) {
      this.myRidesService.getAllClosedRides(this.userId).subscribe(data => {
        this.passangerRideList = data.json().resultData.passengerRides;
        this.riderRideList = data.json().resultData.riderRides;
      });

      this.myRidesService.getAllActiveRides(this.userId).subscribe(data => {
        this.activePassangerRideList = data.json().resultData.passengerRides;
        this.activeRiderRideList = data.json().resultData.riderRides;
      });
    }
  }

}
