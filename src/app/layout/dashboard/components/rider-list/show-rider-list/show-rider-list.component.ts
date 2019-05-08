import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../../../app/router.animations';
import { HttpParams } from '@angular/common/http';
import { ShowRiderListService } from './show-rider-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-rider-list',
  templateUrl: './show-rider-list.component.html',
  styleUrls: ['./show-rider-list.component.scss'],
  animations: [routerTransition()]
})
export class ShowRiderListComponent implements OnInit {

  currentRide;
  riderList;
  showRiderList = false;
  constructor(private showRiderListService: ShowRiderListService, private router: Router) { }

  ngOnInit() {
    this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
    if (JSON.parse(localStorage.getItem('riderList'))) {
      this.riderList = JSON.parse(localStorage.getItem('riderList'));
      this.showRiderList = true;
    }
  }

  requestRider() {
    if (this.currentRide) {
      var params = new HttpParams()
        .set('passengerRideId', this.currentRide.id)
        .set('passengerId', this.currentRide.userId)
        .set('MatchedUser', JSON.stringify(this.riderList))
        .set('preferredRider','false')
        .set('requiredSeats', this.currentRide.paramsMap.noOfSeats);
      this.showRiderListService.sendRequestRider(params.toString())
        .subscribe(data => {
          console.log("log in send request", data);
          if (data.json().result === 'SUCCESS') {
            localStorage.setItem('requestSentToRider', JSON.stringify(true));
            this.router.navigateByUrl('/dashboard');
          }
        });
    }
  }
}
