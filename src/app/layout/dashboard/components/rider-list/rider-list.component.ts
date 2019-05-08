import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { routerTransition } from '../../../../../app/router.animations';
import { HttpParams } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rider-list',
  templateUrl: './rider-list.component.html',
  styleUrls: ['./rider-list.component.scss'],
  animations: [routerTransition()]
})
export class RiderListComponent implements OnInit {

  @Input() riderList;
  @Output() passangerCheckout = new EventEmitter<any>();
  @Output() cancelPassengerRide = new EventEmitter<any>();
  currentRide;
  showRiderList = true;
  showCheckInButton = true;
  checkInButtons = false;
  name;
  showCancelButton = true;
  noOfInvitees = 0;

  rider = [];
  riders = [];
  findJoinedRider: Subscription;
  findRider: Subscription;

  constructor(private dashBoardService: DashboardService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
    this.name = (localStorage.getItem('name'));
    if (JSON.parse(localStorage.getItem('inputForRider'))) {
      this.checkInButtons = false;
      this.getTakeRidePassangerList();
    }
    if (JSON.parse(localStorage.getItem('requestSent'))) {
      this.showRiderList = false;
      if (this.findRider)
        this.findRider.unsubscribe();
    }

  }

  cancel() {
    this.cancelPassengerRide.emit(true);
    this.findRider.unsubscribe();
  }


  getJoinedRider() {
    var currentUserId = JSON.parse(localStorage.getItem('userId'));
    this.currentRide = this.riderList[0];
    var id = this.currentRide.rideid;
    this.findJoinedRider = Observable.interval(5000).subscribe(x => {
      this.dashBoardService.getRideDetails(id).subscribe((data) => {
        this.riders = data.json().resultData;
        this.rider = this.riders.find(function (obj) { return obj.rider === true; });
        this.riders = this.riders.filter(function (rider) {
          return rider.userId != currentUserId;
        });
        this.checkInButtons = true;
      },
        (error) => {
          alert(error.json().resultData.userMsg);
          this.findJoinedRider.unsubscribe();
        }
      )
    });
  }

  checkIn() {
    var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
    var params = new HttpParams()
      .set('updateByRider', 'false')
      .set('riderRideId', this.riderList[0].rideid)
      .set('status', 'Started')
      .set('userId', currentRide.id)
      .set('id', currentRide.userId);
    /* this.dashBoardService.checkInPassanger(params.toString()).subscribe(data => {
       console.log("data after checkin", JSON.stringify(data.json()));
       this.showCheckInButton = false;
       this.findJoinedRider.unsubscribe();
     });*/
    this.showCheckInButton = false;
    this.findJoinedRider.unsubscribe();

  }

  checkOut() {
    var params = new HttpParams()
      .set('id', this.currentRide.userId);
    /* this.dashBoardService.checkOutPassanger(params.toString()).subscribe(data => {
       console.log("data after checkout", JSON.stringify(data.json()));
       this.passangerCheckout.emit(this.riderList[0].rideid);
     });*/
    this.passangerCheckout.emit(this.riderList[0].rideid);
  }



  getTakeRidePassangerList() {
    var input = JSON.parse(localStorage.getItem('inputForRider'));
    var rideId = input.resultData.id;
    this.findRider = Observable.interval(2000).subscribe(x => {
      var params = new HttpParams()
        .set('id', rideId)
        .set('startLatitude', input.resultData.startLatitude)
        .set('startLongitude', input.resultData.startLongitude)
        .set('endLatitude', input.resultData.endLatitude)
        .set('endLongitude', input.resultData.endLongitude)
        .set('startTime', input.resultData.startTime)
        .set('userId', input.resultData.userId)
        .set('route', input.resultData.routePathPolyline)
        .set('noOfSeats', input.resultData.noOfSeats);

      this.dashBoardService.findMatchingRiders(params.toString())
        .subscribe((response) => {
          this.riderList = response.json().resultData.matchedRiders;
          this.noOfInvitees = this.riderList.length;
          if (this.riderList.length != 0) {
            this.showCancelButton = false;
          }
          localStorage.setItem("riderList", JSON.stringify(this.riderList))
          localStorage.setItem('inputForRider', JSON.stringify(input));
        },
          (error) => {
            alert(error.json().resultData.userMsg);
          });
    });
  }

  viewProfile(input) {
    const dialogRef = this.dialog.open(ViewProfileComponent, {
      width: '350px',
      data: { profile: input }
    });
  }

  seeRiderList() {
    if (this.noOfInvitees != 0) {
      this.router.navigate(['/rider-invite-list']);
    }
  }
}
