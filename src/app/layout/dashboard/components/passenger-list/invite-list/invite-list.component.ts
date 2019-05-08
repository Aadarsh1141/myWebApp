import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { PassengerListService } from '../passenger-list.service';
import { Subscription } from 'rxjs/Subscription';
import { routerTransition } from '../../../../../router.animations';
import { MatSnackBar, MatDialog } from '@angular/material';
import { URLSearchParams } from '@angular/http';
import { ViewProfileComponent } from '../../view-profile/view-profile.component';
import { PassengerViewProfileComponent } from './passenger-view-profile/passenger-view-profile.component';

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.scss'],
  animations: [routerTransition()]
})
export class InviteListComponent implements OnInit {

  @Output() onInvite = new EventEmitter<any>();
  parameters: URLSearchParams;
  sub: Subscription;
  routeData: any;
  passengerList = [];
  currentRide;

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
    private router: Router, private passengerListService: PassengerListService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.parameters = new URLSearchParams();
    this.passengerList = JSON.parse(localStorage.getItem('passengerList'));
    this.currentRide = JSON.parse(localStorage.getItem('currentRide'));
    console.log(this.currentRide);
    console.log(this.passengerList);

  }
  //Invite ride passenger
  invitePassenger() {
    this.passengerList = JSON.parse(localStorage.getItem('passengerList'));
    var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));

    console.log("curren ride is", JSON.stringify(currentRide));
    console.log("passendge", this.passengerList);
    


    this.parameters.append('id', currentRide.id);
    this.parameters.append('userId', currentRide.userId);
    this.parameters.append('MatchedUser', JSON.stringify(this.passengerList));
    this.passengerListService.invitePassengers(this.parameters)
      .subscribe(
        (response) => {
          this.openSnackBar('Invited', '', 3000);
          //After successful invitation , send user back to dashboard
          this.router.navigateByUrl('/dashboard');
          localStorage.setItem('invitePassenger', 'true');
        },
        (error) => {
          this.openSnackBar('Failed to invite', '', 3000);
          console.log(error);
        }
      );
  }
  openSnackBar(message: string, action: string, time) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

  viewProfile(input: any) {
    const dialogRef = this.dialog.open(PassengerViewProfileComponent, {
      width: '350px',
      data: { profile: input }
    });

    /*  const sub = dialogRef.componentInstance..subscribe((data: any) => {
        if (data) {
          dialogRef.close();
        }
      });*/
  }
}
