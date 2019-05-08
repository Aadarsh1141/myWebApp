import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripReportService } from './trip-report.service';
import { HttpParams } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-trip-report',
  templateUrl: './trip-report.component.html',
  styleUrls: ['./trip-report.component.scss']
})
export class TripReportComponent implements OnInit {

  currentRating: number;
  @Input() tripReport;

  //Send data to dashboard component to show feedback page
  @Output()
  feedback = new EventEmitter<string>();

  fromLocation;
  //Send data to dashboard component to show trip report page
  @Output()
  tripreport = new EventEmitter<string>();

  bill: any;
  test = 'gg';
  rider = {};
  showPassengerBill: boolean = false;
  passangerBill;
  constructor(private tripReportService: TripReportService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.currentRating = 8;
    if ((localStorage.getItem('tripReport')) !== undefined)
      this.tripReport = JSON.parse(localStorage.getItem('tripReport'));
    this.passangerBill = JSON.parse(localStorage.getItem('passengerTripReport'));
    if (this.passangerBill !== null) {
      this.bill = this.tripReport;
      this.showPassengerBill = true;
    }
    if (this.passangerBill == null)
      this.bill = this.tripReport.bills[0];

    //Check if there were any passengers .Show trip report page if true.
    if (this.bill === undefined) {
      this.tripreport.emit(JSON.stringify('false'));
    }
    else {
      this.fromLocation = this.bill.startLocation;
    }

    this.clearLocalStorage();
  }
  tripComplete() {
    if (this.passangerBill !== null) {
      this.rider = {
        riderId: this.bill.billByUserId,
        name: this.bill.billByUserName
      }
    }
    if (this.passangerBill == null) {
      this.rider = {
        riderId: this.bill.userId,
        name: this.bill.userName
      };
    }
    //If trip report page is shown , show feedback page as well .
    if (this.bill != undefined) {
      this.feedback.emit(JSON.stringify(this.rider));
    }
    else {
      //
    }
  }
  clearLocalStorage() {
    localStorage.removeItem('invitePassenger');
    localStorage.removeItem('RideStatus');
    localStorage.removeItem('passengerList');
    localStorage.removeItem('AllRides');
    localStorage.removeItem('ActiveRides');
    localStorage.removeItem('currentRides');
    localStorage.removeItem('passengers');
    localStorage.removeItem('showCurrentRide');
    localStorage.removeItem('RidePosted');
  }
  markFav(input: any) {
    var userId = JSON.parse(localStorage.getItem('userId'));
    var params = new HttpParams()
      .set('favouritePartnerUserIds', input.userId)
      .set('userId', userId);

    this.tripReportService.markFavourite(params.toString()).subscribe(
      data => {
        this.snackBar.open("User marked as favourite", "Success", {
          duration: 2000
        })
      }
    )
  }

}
