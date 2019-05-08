import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { FeedbackService } from './feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  urlSearchParams: any;
  @Input() userId;
  @Input() riderId;
  @Input() riderName;
  @Input() rideId;
  @Output()
  feedback = new EventEmitter<string>();
  selected: number;
  hovered: number;
  comments: string;

  constructor(public feedbackService: FeedbackService, public router: Router) { }

  ngOnInit() {
    this.urlSearchParams = new URLSearchParams();
    this.selected = 0;
    this.hovered = 0;
    this.comments = '';

  }
  //Submit feedback form
  completeFeedback() {
    this.urlSearchParams = new URLSearchParams();
    this.urlSearchParams.append('feedbackby', this.userId);
    this.urlSearchParams.append('feedbackto', this.riderId);
    this.urlSearchParams.append('rideid', this.rideId);
    this.urlSearchParams.append('rating', this.selected);
    this.urlSearchParams.append('extrainfo', this.comments);
    this.feedbackService.saveFeedback(this.urlSearchParams)
      .subscribe(
        (response) => {
          this.clearLocalStorage();
          this.feedback.emit(JSON.stringify('false'));
        },
        (error) => {

        });
  }
  clearLocalStorage() {
    localStorage.setItem("tripCompleted", 'false');
    localStorage.setItem("feedBackForm", 'false');
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
  //User can skip a feedback as well.
  skipFeedback() {
    this.urlSearchParams = new URLSearchParams();
    localStorage.setItem("tripCompleted", 'false');
    localStorage.setItem("feedBackForm", 'false');
    this.clearLocalStorage();
    this.feedback.emit(JSON.stringify('false'));
  }
}
