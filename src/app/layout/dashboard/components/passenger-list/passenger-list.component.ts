import { Component, OnInit, Input, OnDestroy, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PassengerListService } from './passenger-list.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material';
import { Paho } from 'ng2-mqtt/mqttws31';
import { UUID } from 'angular2-uuid';
import { PushNotificationService } from 'ng-push-notification';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { routerTransition } from '../../../../../app/router.animations';
import { MenuModelComponent } from '../../menu-model/menu-model.component';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
  animations: [routerTransition()]
})

export class PassengerListComponent implements OnInit, OnDestroy {

  noOfInvitees: number;
  currentUserId: string;
  rider: any;
  findJoinedPassengers: Subscription;
  passengers: any;
  pushMessage: string;
  myMessage: any;
  client: Paho.MQTT.Client;
  host: string = "13.127.171.104"
  port: number = 61614;
  uuid = UUID.UUID();
  messages = [];
  userId: any;
  startTime: string;
  date: Date;
  findPassengers: Subscription;
  passengerList: any = [];
  riderProfile;
  currentRide;

  @Input() currentRideObject; //Get current ride details from dashboard components

  invitationAccepted: boolean;
  parameters: any;
  constructor(public snackBar: MatSnackBar,
    public passengerListService: PassengerListService,
    public dialog: MatDialog,
    private pushNotification: PushNotificationService,
    public overlay: Overlay,
    public router: Router) { }

  ngOnInit() {
    //alert("Refresh...");
    this.passengers = [];
    this.passengerList = [];
    this.noOfInvitees = 0;
    this.invitationAccepted = false;
    this.parameters = new URLSearchParams();
    console.log("current ride obh", this.currentRideObject);
    this.currentRide = this.currentRideObject;
    // this.connectToMqtt();
    this.currentUserId = localStorage.getItem("userId").toString();
    this.riderProfile = JSON.parse(localStorage.getItem("RiderProfile"));
    console.log("rider profile is", JSON.stringify(this.riderProfile));
    this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
    console.log("this is curent ride in passenger", JSON.stringify(this.currentRide));

    this.getRideDetails(this.currentUserId);
    this.findRiders();


  }
  //Route to invite list page
  seeInviteList() {
    if (this.noOfInvitees != 0) {
      this.router.navigate(['/invite-list']);
    }
  }
  ngOnDestroy() {
    this.findPassengers.unsubscribe();
    //this.findJoinedPassengers.unsubscribe();
  }
  //Connect to mqtt server
  connectToMqtt() {
    this.client = new Paho.MQTT.Client(this.host, this.port, this.uuid);
    this.onMessage();
    this.onConnectionLost();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });
  }
  onConnected() {
    console.log("Connected");
    this.client.subscribe("userMsg/" + this.currentRide.userId.toString(), {});
  }
  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "123456";
    // this.client.send(packet);
  }
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived : ' + (message.payloadString));
      this.myMessage = JSON.parse(message.payloadString);
      this.findMessageType(this.myMessage);
    };
  }
  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }
  //Mqtt responses are divided into types . For each type , show different messages .
  findMessageType(message) {
    switch (message.msgObjType) {
      case "invsts": {
        console.log("Invitation");

        break;
      }
      case "ridests": {
        console.log("Ride");
        break;
      }
      case "chat": {
        console.log("Chat");
        this.openChat(message);
        break;
      }
      case "noti": {
        console.log("Notification");
        this.openSnackBar(message.title, '', 4000);
        if (message.type === "RM_RIDER_INVITATION" || message.type === "RM_PASSENGER_JOIN_RIDE_RIDER") {
          this.openInvitation(message);

        }
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
  // showPush(pushMessage) {
  //   this.pushNotification.show(
  //     pushMessage,
  //     {/* any settings, e.g. icon */},
  //     6000, // close delay.
  //   );
  //   // Or simply this:
  //   this.pushNotification.show('And that too!');
  // }
  openDialog(rating, matchPercentage, requiredSeats): void {

    let dialogRef = this.dialog.open(PassengerDetails, {
      width: '400px',
      data: {
        rating: rating,
        matchPercentage: matchPercentage,
        requiredSeats: requiredSeats
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  openChat(message): void {
    if (this.dialog.openDialogs.length > 0) {
      this.dialog.closeAll();
    }

    let dialogRef = this.dialog.open(PassengerChat, {
      width: '400px',
      scrollStrategy: this.overlay.scrollStrategies.block(),

      data: {
        sourceId: this.currentRide.userId,
        destId: this.userId,
        time: this.dateConverter(new Date()),
        message: message,
      }
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });

  }
  openInvitation(message): void {
    let dialogRef = this.dialog.open(PassengerInvitation, {
      width: '400px',
      data: {
        message: message,
        currentRide: this.currentRide


      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openUserDialog(input: any) {
    console.log("rider profile", JSON.stringify(input));

    var dialogRef = this.dialog.open(MenuModelComponent, {
      width: '300px',
      data: { input: input }
    });
    const sub = dialogRef.componentInstance.onUnjoinCall.subscribe(data => {
      console.log("data after unjoin", data);
      if (data) {
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('passengerRideId', input.rideId);
        urlSearchParams.append('cancelReason', 'Rider Unjoined');
        urlSearchParams.append('rideType', 'Passenger');
        urlSearchParams.append('id', this.currentRide.id);
        /*
        var params = new HttpParams()
          .set('passengerRideId', input.rideId)
          .set('cancelReason', 'Rider Unjoined')
          .set('rideType', 'Passenger')
          .set('id', this.currentRide.id);*/
        this.passengerListService.unjoinPassenger(urlSearchParams)
          .subscribe(data => {
            console.log("data after unjoin", data.json());

            dialogRef.close();
          })

      }
    })
  }
  /*openGuestDialog(input: any) {
    console.log("input in openGuestModel", input);
    //this.findPassengers.unsubscribe();
    var dialogRef = this.dialog.open(MenuModelComponent, {
      width: '300px',
      data: { input: input }
    });

  }*/

  passengersNames: any;

  getRideDetails(currentUserId) {
    console.log("Inside get passengers");
    var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
    this.findJoinedPassengers = Observable.interval(5000).subscribe(x => {
      this.passengerListService.getRideDetails(currentRide.id)
        .subscribe(
          (data) => {
            this.passengers = data.json().resultData;
            this.rider = this.passengers.find(function (obj) { return obj.rider === true; });
            this.passengers = this.passengers.filter(function (rider) {
              return rider.userId != currentUserId;
            })
            // console.log(this.passengers);
            // this.findPassengers.unsubscribe();
            //this.findJoinedPassengers.unsubscribe();
          },
          (error) => {
            console.log(error);
            alert(error.json().resultData.userMsg);
            this.findJoinedPassengers.unsubscribe();
          }
        );
    });
  }
  //Find nearby riders
  findRiders() {
    this.currentRideObject = JSON.parse(localStorage.getItem('CurrentRide'));
    if (this.currentRideObject)
      this.findPassengers = Observable.interval(2000).subscribe(x => {
        var myParams = new URLSearchParams();
        myParams.append('userId', this.currentRideObject.userId);
        myParams.append('startLatitude', this.currentRideObject.startLatitude);
        myParams.append('startLongitude', this.currentRideObject.startLongitude);
        myParams.append('endLatitude', this.currentRideObject.endLatitude);
        myParams.append('endLongitude', this.currentRideObject.endLongitude);
        myParams.append('startTime', this.currentRideObject.dataAsMap.startTime);
        myParams.append('id', this.currentRideObject.dataAsMap.id);
        myParams.append('noOfSeats', this.currentRideObject.noOfSeats);
        myParams.append('farePerKm', this.currentRideObject.farePerKm);
        myParams.append('vehicleType', this.currentRideObject.vehicleType);
        myParams.append('route', this.currentRideObject.routePathPolyline);
        //  console.log(this.parameters);
        console.log("Inside passanger list", myParams);
        this.passengerListService.findMatchingRiders(myParams)
          .subscribe(
            (response) => {
              this.passengerList = response.json().resultData.matchedPassengers;
              console.log("passanger list is", JSON.stringify(response.json()));

              this.passengerListService.inviteList = this.passengerList.matchedPassengers;
              localStorage.setItem('passengerList', JSON.stringify(this.passengerList));
              localStorage.setItem('currentRide', JSON.stringify(this.currentRide));
              if (this.passengerList.length > 0) {
                this.noOfInvitees = this.passengerList.length;
                this.userId = this.passengerList[0].userid;
                localStorage.setItem('passengers', JSON.stringify(response.json().resultData.matchedPassengers));
              }

            },
            (error) => {
              alert(error.json().resultData.userMsg);
              this.findPassengers.unsubscribe();
            }
          );
      });
  }

  invitePassenger() {
    this.parameters.append('id', this.currentRide.id);
    this.parameters.append('userId', this.currentRide.userId);
    this.parameters.append('MatchedUser', JSON.stringify(this.passengerList));
    this.passengerListService.invitePassengers(this.parameters)
      .subscribe(
        (response) => {
          this.openSnackBar('Invited', '', 3000);
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          alert(error.json().resultData.userMsg);
          this.openSnackBar('Failed to invite', '', 3000);
          console.log(error);
        }
      );
  }
  //Same as date converter in dashboard and ride component
  dateConverter(date) {
    return (
      this.addTrailingZeroToDate(date.getDate())
      + this.addTrailingZeroToDate(date.getMonth() + 1)
      + date.getFullYear().toString()
      + this.addTrailingZeroToDate(date.getHours())
      + this.addTrailingZeroToDate(date.getMinutes()));
  }

  addTrailingZeroToDate(unit) {
    unit = unit > 9 ? unit : '0' + unit;
    return unit.toString();
  }

  openSnackBar(message: string, action: string, time) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }
}
@Component({
  selector: 'passenger-details',
  templateUrl: 'passenger-details.html',
})
export class PassengerDetails {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
}

@Component({
  selector: 'passenger-invitation',
  templateUrl: 'passenger-invitation.html',
})
export class PassengerInvitation {
  rideDetails: any;
  parameters: URLSearchParams;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PassengerInvitation>, public passengerService: PassengerListService) {
    this.parameters = new URLSearchParams();
    this.rideDetails = JSON.parse(this.data.message.msgObjectJson);
    console.log(this.rideDetails);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  //Accept passenger invitation
  acceptPassenger() {
    this.parameters.append('id', this.rideDetails.rideId);
    this.parameters.append('userId', this.rideDetails.riderId);
    this.parameters.append('passengerRideId', this.rideDetails.passengerRideId);
    this.parameters.append('passengerId', this.rideDetails.passengerId);
    this.parameters.append('pickupAddress', this.rideDetails.pickupAddress);
    this.parameters.append('pickupLatitude', this.rideDetails.pickupLatitude);
    this.parameters.append('pickupLongitude', this.rideDetails.pickupLongitude);
    this.parameters.append('pickupTime', this.dateConverter(new Date(this.data.currentRide.startTime)));
    this.parameters.append('dropAddress', this.rideDetails.dropAddress);
    this.parameters.append('dropLatitude', this.rideDetails.dropLatitude);
    this.parameters.append('dropLongitude', this.rideDetails.dropLongitude);
    this.parameters.append('dropTime', this.dateConverter(new Date(this.data.currentRide.expectedEndTime)));
    this.parameters.append('distance', this.rideDetails.matchedDistance);
    this.parameters.append('points', this.rideDetails.points);
    this.parameters.append('availableSeats', this.rideDetails.noOfSeats);
    this.parameters.append('Invitation_id', this.rideDetails.id);
    this.parameters.append('distanceOnPsgrRoute', this.rideDetails.distanceOnPassengerRoute);
    this.parameters.append('newFare', this.rideDetails.newFare);
    this.parameters.append('fareChange', this.rideDetails.fareChange);
    this.parameters.append('savePickupDropPoints', "0");
    this.parameters.append('preferredPickupDropId', this.rideDetails.prefPickupDropId);
    this.parameters.append('pickupLandmark', "");
    this.parameters.append('dropLandmark', "");
    this.passengerService.addPassenger(this.parameters)
      .subscribe(
        (response) => {
          console.log(response.json());

        },
        (error) => {
          console.log(error);
          alert(error.json().resultData.userMsg);
          //this.findPassengers.unsubscribe();
        }
      );


  }
  dateConverter(date) {
    return (
      this.addTrailingZeroToDate(date.getDate())
      + this.addTrailingZeroToDate(date.getMonth() + 1)
      + date.getFullYear().toString()
      + this.addTrailingZeroToDate(date.getHours())
      + this.addTrailingZeroToDate(date.getMinutes()));
  }
  addTrailingZeroToDate(unit) {
    unit = unit > 9 ? unit : '0' + unit;
    return unit.toString();
  }


}

@Component({
  selector: 'passenger-chat',
  templateUrl: 'passenger-chat.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerChat {
  parameters: URLSearchParams;
  message: string;
  conversations = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public passengerListService: PassengerListService) {

  }
  ngOnInit() {
    //  console.log("Passenger Chat called !");
    this.parameters = new URLSearchParams();
    this.message = '';
    this.conversations = JSON.parse(localStorage.getItem("chat"));
    if (this.conversations === null || this.conversations === undefined) {
      this.conversations = [];
    }

    if (this.data.message != null) {
      this.conversations.push({
        message: this.data.message.message,
        source: this.data.sourceId,
        time: this.data.time
      });
      //  this.sortByDate();
      localStorage.setItem("chat", JSON.stringify(this.conversations));

    }

  }
  sortByDate() {
    this.conversations = this.conversations.sort((a: any, b: any) =>
      new Date(a.time).getTime() - new Date(b.time).getTime()
    );
  }
  //Send message to passenger
  sendMessage() {

    this.parameters.append('sourceId', this.data.sourceId);
    this.parameters.append('destId', this.data.destId);
    this.parameters.append('time', this.dateConverter(new Date()));
    this.parameters.append('msgType', '1');
    this.parameters.append('msgStatus', '2');
    this.parameters.append('message', this.message)
    this.passengerListService.sendChat(this.parameters)
      .subscribe(
        (response) => {
          //console.log(response.json());
          this.conversations.push({
            message: this.message,
            source: this.data.sourceId,
            time: this.data.time
          });

          this.message = '';
          localStorage.setItem("chat", JSON.stringify(this.conversations));
          //  this.openSnackBar('Invited', '');

        },
        (error) => {
          //  this.openSnackBar('Failed to invite', '');
          alert(error.json().resultData.userMsg);
          console.log(error)
        }
      );
  }
  dateConverter(date) {
    return (
      this.addTrailingZeroToDate(date.getDate())
      + this.addTrailingZeroToDate(date.getMonth() + 1)
      + date.getFullYear().toString()
      + this.addTrailingZeroToDate(date.getHours())
      + this.addTrailingZeroToDate(date.getMinutes()));
    // console.log(this.startTime);

  }
  addTrailingZeroToDate(unit) {
    unit = unit > 9 ? unit : '0' + unit;
    return unit.toString();

  }
  // checkMessageType() {

  // }
}
