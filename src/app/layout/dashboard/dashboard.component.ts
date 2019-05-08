import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone, Input, Directive, OnDestroy, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from 'google-maps';
import { DashboardService } from './dashboard.service';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';

import { Router } from '@angular/router';
import { Paho } from 'ng2-mqtt/mqttws31';
import { UUID } from 'angular2-uuid';
import { PassengerListComponent, MapComponent } from './components';
import { CurrentRideModel } from './current-ride-model';
import { HttpParams } from '@angular/common/http';

declare var require: any;
declare var google: any;


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})


export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

    rideRoute: any;
    //  myOtherMessage$: Observable<MqttMessage>;
    @ViewChild("passenger") passenger: PassengerListComponent;
    client: Paho.MQTT.Client;
    host: string = "13.127.171.104"
    port: number = 61614;
    uuid = UUID.UUID();
    messages = [];
    userId: number;
    myMessage: any;
    coordinates: any;

    profileName;
    rider: any = [];
    riderName: any;
    feedBackForm: boolean;
    riderId: any;
    feedback: any;
    tripReport: any;
    tripCompleted: boolean;

    showPassengerTripReport: boolean = false;
    showPassengerFeedback: boolean = false;

    showEditRideForm: boolean;
    defaultVehicle: any;
    invitationAccepted: boolean;
    allRideDetails: any;
    ActiveRides: any;
    AllRides: any;
    getCurrentPosition: Subscription;
    checkPassengerInvitations: Subscription;
    findPassengers: Subscription;

    rideStart: boolean;
    ridePosted: boolean;

    passengerList = [];
    showRideInfo: boolean;
    showRide = true;// Used to flag start-ride , ongoing rides

    // Time Variables
    startTime: string;
    mm: string;
    HH: string;
    yyyy: string;
    MM: string;
    dd: string;

    currentVehicle;

    destLng: number;
    destLat: number;
    urlSearchParams: any;
    rideId;

    latlng: { lat: number; lng: number; };
    destLatLong: { lat: number; lng: number; };

    lat: number;
    lng: number;
    currentAddress = '';
    currentTime;
    routeForm: FormGroup;
    showDirection: boolean;

    destinationAddress;
    currentRide: any;
    currentRideObject: CurrentRideModel;
    numberOfSeats;
    showCurrentRideDetails = {
        "vehicleModel": "",
        "vehicleNumber": "",
        "startTime": "",
        "startAddress": "",
        "endAddress": ""
    }

    showRiderList = false;
    @ViewChild(MapComponent) mapComponent: MapComponent;
    constructor(public dashboardService: DashboardService,
        public snackBar: MatSnackBar, public router: Router) { }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem('requestSentToRider'))) {
            this.showRiderList = true;
            this.showRideInfo = false;
            this.showRide = false;
        }

        if (JSON.parse(localStorage.getItem('inputForRider'))) {
            console.log("inside input for rifer");

            this.showRiderList = true;
            this.showRideInfo = false;
            this.showRide = false;
        }
        if (JSON.parse(localStorage.getItem('invitePassenger'))) {
            this.showRideInfo = true;
            this.showRide = false;
            this.ridePosted = true;
        }

        this.showEditRideForm = false;
        this.currentRideObject = this.dashboardService.getCurrentRideObj();
        this.defaultVehicle = {};
        this.invitationAccepted = false;
        this.showDirection = false;
        this.urlSearchParams = new URLSearchParams();
        this.getLocalData();
        this.getRiderDetails();
        this.getDefaultVehicle();
        this.getCurrentTime();
        this.getAllRides();
        this.destinationAddress = null;
        if (this.currentRide) {
            this.lat = this.currentRide.startLatitude;
            this.lng = this.currentRide.startLongitude;
            this.destLat = this.currentRide.endLatitude;
            this.destLng = this.currentRide.endLongitude;
            this.rideId = this.currentRide.id;
        }
        if ((this.rideStart) || (this.ridePosted)) {
            console.log("inside ride start ngoninit");
            this.showRideInfo = true;
            this.showRide = false;
        }
        var rList: any = [];
        if (JSON.parse(localStorage.getItem('riderList'))) {
            rList = JSON.parse(localStorage.getItem('riderList'));
            if (rList.length !== 0) {
                this.showRiderList = true;
                this.showRide = false;
                this.showRideInfo = false;
                this.riderList = JSON.parse(localStorage.getItem('riderList'));
            }
        }
    }
    ngAfterViewInit() {
        //this.passenger.connectToMqtt();
    }
    ngOnDestroy() {

    }
    getRideRoute(event) {
        this.rideRoute = event;
        if (this.latlng === null || this.destLatLong === null) {
            this.rideRoute = null;
        }

    }
    //Get rider details and store them in RiderProfile for local use
    getRiderDetails = () => {
        this.dashboardService.getRiderDetails(this.userId)
            .subscribe(
                (response) => {
                    localStorage.setItem("riderUserProfile", JSON.stringify(response.json().resultData));
                    this.profileName = response.json().resultData.userName;
                },
                (error) => {
                }
            );


    }
    getLocalData() {
        this.userId = Number(localStorage.getItem('userId'));
        this.currentVehicle = localStorage.getItem('VehicleList');
        this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        this.passengerList = JSON.parse(localStorage.getItem('passengers'));
        this.rideStart = JSON.parse(localStorage.getItem('RideStatus'));
        this.ridePosted = JSON.parse(localStorage.getItem('RidePosted'));
        this.feedBackForm = JSON.parse(localStorage.getItem('feedBackForm'));
        if (JSON.parse(localStorage.getItem('showCurrentRide'))) {
            this.showCurrentRideDetails = JSON.parse(localStorage.getItem('showCurrentRide'));
        }
    }
    //Fetching pickup coordinates from map or autocomplete function
    public getPickupCoords(event) {
        this.latlng = JSON.parse(event);
        if (this.latlng !== null) {
            this.lat = this.latlng.lat;
            this.lng = this.latlng.lng;
            this.coordinates = this.latlng;
            this.mapComponent.resetStrokeWeight();
        }
        else {
            this.lat = null;
            this.lng = null;

        }

    }
    //Fetching destination coordinates from map or autocomplete function
    public getDestinationCoords(event) {
        this.destLatLong = JSON.parse(event);
        if (this.destLatLong !== null) {
            this.destLat = this.destLatLong.lat;
            this.destLng = this.destLatLong.lng;
            //   this.mapComponent.resetStrokeWeight();
        }
        else {
            this.destLat = null;
            this.destLng = null;
            this.rideRoute = null;
        }

    }
    //Fetching pickup address from map or autcomplete function
    public getPickupAddress(event) {
        this.currentAddress = event;
    }

    getNumberOfSeats(event) {
        this.numberOfSeats = event;
    }
    //Fetching destination address from map or autocomplete function
    public getDestinationAddress(event) {
        this.destinationAddress = event;
    }
    //Fetching ride time from ride component
    public getRideTime(event) {
        this.startTime = event;
    }
    // Post Ride as a Rider
    postRide() {
        if (this.destinationAddress === undefined || this.destinationAddress === null || this.currentAddress === null || this.startTime === null) {
            this.openSnackBar("Please enter all details!", "");
        }
        else {
            this.urlSearchParams = new URLSearchParams();
            this.urlSearchParams.append('userId', this.userId.toString());
            this.urlSearchParams.append('startAddress', this.currentAddress);
            this.urlSearchParams.append('startLatitude', this.lat);
            this.urlSearchParams.append('startLongitude', this.lng);
            this.urlSearchParams.append('endAddress', this.destinationAddress);
            this.urlSearchParams.append('endLatitude', this.destLat);
            this.urlSearchParams.append('endLongitude', this.destLng);
            this.urlSearchParams.append('startTime', this.startTime);
            this.urlSearchParams.append('vehicleNumber', this.defaultVehicle['regno']);
            this.urlSearchParams.append('vehicleModel', this.defaultVehicle['model']);
            this.urlSearchParams.append('availableSeats', this.defaultVehicle['capacity']);
            this.urlSearchParams.append('farePerKm', this.defaultVehicle['fare']);
            this.urlSearchParams.append('capacity', this.defaultVehicle['capacity']);
            this.urlSearchParams.append('vehicleType', this.defaultVehicle['vehicleType']);

            this.dashboardService.postRide(this.urlSearchParams)
                .subscribe(
                    (response) => {
                        this.rideId = response.json().resultData.id;
                        this.currentRide = response.json().resultData;
                        this.currentRideObject = this.currentRide;
                        this.showCurrentRideDetails.startAddress = this.currentAddress;
                        this.showCurrentRideDetails.endAddress = this.destinationAddress;
                        this.showCurrentRideDetails.vehicleModel = this.defaultVehicle['model'];
                        this.showCurrentRideDetails.vehicleNumber = this.defaultVehicle['regno'];
                        this.showCurrentRideDetails.startTime = this.currentRide.startTime;
                        localStorage.setItem('CurrentRide', JSON.stringify(this.currentRide));
                        localStorage.setItem('showCurrentRide', JSON.stringify(this.showCurrentRideDetails));
                        this.getActiveRides();
                    },
                    (error) => {
                    }
                );

        }

    }

    updateRide(event) {
        this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        this.urlSearchParams = new URLSearchParams();
        this.urlSearchParams.append('startAddress', this.currentAddress);
        this.urlSearchParams.append('startLatitude', this.lat);
        this.urlSearchParams.append('startLongitude', this.lng);
        this.urlSearchParams.append('endAddress', this.destinationAddress);
        this.urlSearchParams.append('endLatitude', this.destLat);
        this.urlSearchParams.append('endLongitude', this.destLng);
        this.urlSearchParams.append('startTime', this.startTime);
        this.urlSearchParams.append('vehicleNumber', null);
        this.urlSearchParams.append('vehicleModel', null);
        this.urlSearchParams.append('availableSeats', null);
        this.urlSearchParams.append('farePerKm', null);
        this.urlSearchParams.append('capacity', null);
        this.urlSearchParams.append('routeId', this.currentRide.routeId);
        this.urlSearchParams.append('vehicleId', null);
        this.urlSearchParams.append('capacity', null);
        this.urlSearchParams.append('id', this.currentRide.id);
        this.urlSearchParams.append('route', this.rideRoute);
        this.urlSearchParams.append('makeAndCategory', null);
        this.urlSearchParams.append('vehicleType', null);

        this.dashboardService.updateRide(this.urlSearchParams)
            .subscribe(
                (response) => {
                    this.rideId = response.json().resultData.id;
                    this.currentRide = response.json().resultData;
                    localStorage.setItem('CurrentRide', JSON.stringify(this.currentRide));
                    this.getActiveRides();
                },
                (error) => {
                }
            );


    }
    editRide(event) {
        this.showEditRideForm = true;
        this.showRideInfo = !this.showRideInfo;
        this.showRide = true;
    }
    public getCurrentTime() {
        this.currentTime = new Date();
        this.getStartTime();
    }

    showStartTime;
    //Start time needs to be in the format ddMMyyyyHHmm
    getStartTime() {
        this.dd = this.addTrailingZeroToDate(this.currentTime.getDate());
        this.MM = this.addTrailingZeroToDate(this.currentTime.getMonth() + 1);
        this.yyyy = this.currentTime.getFullYear().toString();
        this.HH = this.addTrailingZeroToDate(this.currentTime.getHours());
        this.mm = this.addTrailingZeroToDate(this.currentTime.getMinutes());
        this.startTime = (this.dd + this.MM + this.yyyy + this.HH + this.mm);

    }
    //Add extra zeros to convert 6 to 06 or 9 to 09
    addTrailingZeroToDate(unit) {
        unit = unit > 9 ? unit : '0' + unit;
        return unit.toString();

    }

    changeMapStyles() {
        this.showRideInfo = !this.showRideInfo;
        this.showRide = true;
    }

    //Start ride
    startRide() {
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id', this.rideId);
        urlSearchParams.append('riderRideId', this.rideId);
        urlSearchParams.append('userId', this.userId.toString());
        urlSearchParams.append('status', 'Started');
        urlSearchParams.append('updateByRider', 'true');
        this.dashboardService.startRide(urlSearchParams)
            .subscribe(
                (response) => {
                    this.rideStart = true;
                    localStorage.setItem('RideStatus', 'true');
                    this.openSnackBar('Ride Started', 'Success');
                },
                (error) => {
                }
            );
    }
    //Stop ride
    stopRide() {
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id', this.rideId);
        this.dashboardService.stopRide(urlSearchParams)
            .subscribe(
                (response) => {
                    this.rideStart = false;
                    localStorage.setItem('RideStatus', 'false');
                    this.showRideInfo = false;
                    this.showRide = true;
                    this.ridePosted = false;
                    localStorage.setItem('RidePosted', 'false');
                    this.openSnackBar('Ride Stopped', '');
                    this.showDirection = false;
                    this.mapComponent.refreshMap();
                    this.getTripReport();

                },
                (error) => {
                }
            );
    }
    cancelRide(event) {
        this.urlSearchParams.append('id', this.rideId);
        this.urlSearchParams.append('userId', this.userId);
        this.dashboardService.cancelRide(this.urlSearchParams)
            .subscribe(
                (response) => {
                    this.rideStart = false;
                    localStorage.setItem('RideStatus', 'false');
                    this.showRideInfo = false;
                    this.showRide = true;
                    this.ridePosted = false;
                    this.showDirection = false;
                    localStorage.removeItem('showCurrentRide');
                    this.mapComponent.refreshMap();
                    this.mapComponent.showDeatils();
                    localStorage.removeItem("CurrentRide");
                    localStorage.setItem('RidePosted', 'false');
                    this.openSnackBar('Ride Cancelled !', '');
                    this.ngOnInit();
                },
                (error) => {
                }
            );
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    checkInvitees(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    }
    getAllRides() {
        this.dashboardService.getAllRides(this.userId.toString())
            .subscribe(
                (response) => {
                    this.AllRides = (response.json().resultData);
                    localStorage.setItem('AllRides', JSON.stringify(this.AllRides));
                },
                (error) => {
                }
            );

    }
    getActiveRides() {
        this.mapComponent.showDeatils();
        this.dashboardService.getActiveRides(this.userId.toString())
            .subscribe(
                (response) => {
                    this.ActiveRides = (response.json().resultData);
                    this.currentRide = this.ActiveRides[this.ActiveRides.length - 1];
                    localStorage.setItem('ActiveRides', JSON.stringify(this.ActiveRides));
                    this.showRideInfo = true;
                    this.showRide = false;
                    this.ridePosted = true;
                    localStorage.setItem('RidePosted', 'true');
                },
                (error) => {
                }
            );

    }
    //Get default vehicle details
    getDefaultVehicle() {
        this.dashboardService.getDefaultVehicle(this.userId)
            .subscribe(
                (data) => {
                    this.defaultVehicle = (data.json().resultData);
                },
                (error) => {
                });
    }
    //Get trip report details
    getTripReport() {
        var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id', currentRide.id);
        urlSearchParams.append('actualEndTime', this.startTime);
        urlSearchParams.append('startAddress', currentRide.startAddres);
        urlSearchParams.append('endAddress', currentRide.endAddress);
        urlSearchParams.append('userId', currentRide.userId);
        this.dashboardService.getTripReport(urlSearchParams)
            .subscribe(
                (data) => {
                    localStorage.removeItem("CurrentRide");
                    this.tripReport = (data.json().resultData);
                    localStorage.setItem('tripReport', JSON.stringify(this.tripReport));
                    this.tripCompleted = true;
                    localStorage.setItem('tripCompleted', 'true');
                    //}
                    this.ngOnInit();
                },
                (error) => {
                });
    }

    //Show feedback form
    showFeedback(event) {
        this.feedBackForm = true;
        localStorage.setItem("feedBackForm", 'true');
        this.rider = JSON.parse(event);
        this.riderId = this.rider.riderId;
        this.riderName = this.rider.name;
    }
    showNewRide(event) {
        this.feedBackForm = false;
        this.tripCompleted = false;
        this.showRiderList = false;
        this.showRideInfo = false;
        this.showRide = true;
        localStorage.removeItem('showCurrentRide');
        localStorage.removeItem('CurrentRide');
        localStorage.removeItem('riderList');
        localStorage.removeItem('requestSent');
        localStorage.removeItem('passengerTripReport');
        localStorage.removeItem('inputForRider');
        localStorage.removeItem('riderList');
    }
    showNewRide2(event) {
        this.feedBackForm = false;
        this.tripCompleted = false;
    }

    riderList: any;
    findRider: Subscription;

    getTakeRidePassangerList(input: any) {
        var rideId = input.resultData.id;
        this.findRider = Observable.interval(2000).subscribe(x => {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append('id', rideId);
            urlSearchParams.append('startLatitude', input.resultData.startLatitude);
            urlSearchParams.append('startLongitude', input.resultData.startLongitude);
            urlSearchParams.append('endLatitude', input.resultData.endLatitude);
            urlSearchParams.append('endLongitude', input.resultData.endLongitude);
            urlSearchParams.append('startTime', input.resultData.startTime);
            urlSearchParams.append('userId', input.resultData.userId);
            urlSearchParams.append('route', input.resultData.routePathPolyline);
            urlSearchParams.append('noOfSeats', input.resultData.noOfSeats);
            this.dashboardService.findMatchingRiders(urlSearchParams)
                .subscribe((response) => {
                    this.riderList = response.json().resultData.matchedRiders;
                    localStorage.setItem("riderList", JSON.stringify(this.riderList))
                    localStorage.setItem('inputForRider', JSON.stringify(input));
                    this.showRiderList = true;
                    this.showRide = false;
                    this.showRideInfo = false;
                    this.findRider.unsubscribe();
                },
                    (error) => {

                    });
        });
    }
    passangerRideId = null;

    takeRide() {
        if (this.destinationAddress === undefined || this.numberOfSeats === null || this.currentAddress === null || this.startTime === null) {
            alert("Please enter all fields !");
        }
        else {
            this.urlSearchParams = new URLSearchParams();
            this.urlSearchParams.append('userId', this.userId);
            this.urlSearchParams.append('startAddress', this.currentAddress);
            this.urlSearchParams.append('startLatitude', this.lat);
            this.urlSearchParams.append('startLongitude', this.lng);
            this.urlSearchParams.append('endAddress', this.destinationAddress);
            this.urlSearchParams.append('endLatitude', this.destLat);
            this.urlSearchParams.append('endLongitude', this.destLng);
            this.urlSearchParams.append('startTime', this.startTime);
            this.urlSearchParams.append('noOfSeats', this.numberOfSeats);
            this.dashboardService.createPassangerRide(this.urlSearchParams)
                .subscribe(
                    (response) => {
                        this.passangerRideId = response.json().resultData.id;
                        localStorage.setItem("CurrentRide", JSON.stringify(response.json().resultData));
                        this.getTakeRidePassangerList(response.json());
                        this.currentRide = response.json().resultData;
                        this.currentRideObject = this.currentRide;
                        this.showCurrentRideDetails.startAddress = this.currentAddress;
                        this.showCurrentRideDetails.endAddress = this.destinationAddress;
                        this.showCurrentRideDetails.startTime = this.currentRide.startTime;
                        localStorage.setItem('showCurrentRide', JSON.stringify(this.showCurrentRideDetails))
                        this.mapComponent.showDeatils();
                    },
                    (error) => {
                        this.openSnackBar("Please enter all details!", "");
                    }
                );
        }
    }
    getCancelRide() {
        this.showRiderList = false;
        this.showRide = true;
        this.showRideInfo = false;
        localStorage.removeItem('showCurrentRide');
        localStorage.removeItem('CurrentRide');
        localStorage.removeItem('riderList');
        localStorage.removeItem('requestSent');
        localStorage.removeItem('inputForRider');
        localStorage.removeItem('AllRides');
        localStorage.removeItem('invitePassenger');
    }

    cancelPassangerRide(event) {
        var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        var rideId = currentRide.id;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id', rideId);
        urlSearchParams.append('userId', this.userId.toString());
        this.dashboardService.cancelPassangerRide(urlSearchParams)
            .subscribe(data => {
                this.openSnackBar("Passanger ride cancelled!", "Success");
                this.getCancelRide();
                this.mapComponent.refreshMap();
                this.showRiderList = false;
                this.showRideInfo = false;
                this.showRide = true;
                this.mapComponent.showDeatils();
            });
    }

    reschedulePassanger = null;
    reschedulePassangerRide() {
        this.mapComponent.refreshMap();
        this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        var latLongValue = {
            lat: this.currentRide.startLatitude,
            lng: this.currentRide.startLongitude
        }
        var destLatLongValue = {
            lat: this.currentRide.endLatitude,
            lng: this.currentRide.endLongitude
        }
        this.showRide = true;
        this.showRiderList = false;
        this.reschedulePassanger = "Edit_Ride";
        this.latlng = latLongValue;
        this.destLatLong = destLatLongValue;
        this.currentAddress = this.currentRide.startAddress;
        this.destinationAddress = this.currentRide.endAddress;
        this.numberOfSeats = this.currentRide.paramsMap.noOfSeats;
    }

    getcallPassangerEditRide(event) {
        this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        this.urlSearchParams = new URLSearchParams();
        this.urlSearchParams.append('startAddress', this.currentAddress);
        this.urlSearchParams.append('startLatitude', this.lat);
        this.urlSearchParams.append('startLongitude', this.lng);
        this.urlSearchParams.append('endAddress', this.destinationAddress);
        this.urlSearchParams.append('endLatitude', this.destLat);
        this.urlSearchParams.append('endLongitude', this.destLng);
        this.urlSearchParams.append('startTime', this.startTime);
        this.urlSearchParams.append('noOfSeats', this.numberOfSeats);
        this.urlSearchParams.append('id', this.currentRide.id);

        this.dashboardService.updatePassangerRide(this.urlSearchParams)
            .subscribe(
                (response) => {
                    this.passangerRideId = response.json().resultData.id;
                    localStorage.setItem("CurrentRide", JSON.stringify(response.json().resultData));
                    this.getTakeRidePassangerList(response.json());
                    this.openSnackBar("Ride updated!", 'Success');
                    this.showCurrentRideDetails.startAddress = this.currentAddress;
                    this.showCurrentRideDetails.endAddress = this.destinationAddress;
                    localStorage.setItem('showCurrentRide', JSON.stringify(this.showCurrentRideDetails))

                },
                (error) => {

                }
            );
    }
    getPassengerCheckout(event) {
        if (event) {
            this.getPassengerTripReport(event);
        }
    }

    getPassengerTripReport(rideId) {
        var params = new HttpParams()
            .set('userId', this.userId.toString())
            .set('id', rideId);
        this.dashboardService.getPassengerTripReport(params.toString()).subscribe(
            data => {
                localStorage.setItem('passengerTripReport', JSON.stringify(true));
                this.tripReport = data.json().resultData;
                localStorage.setItem('tripReport', JSON.stringify(this.tripReport));
                this.tripCompleted = true;
                localStorage.setItem('tripCompleted', 'true');
                this.ngOnInit();
            }
        )
    }

    freezeRide(event) {
        var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        if (JSON.parse(localStorage.getItem('CurrentRide'))) {
            var params = new HttpParams()
                .set('id', currentRide.id)
                .set('freezeRide', 'true');
            this.dashboardService.freezeRiderRide(params.toString())
                .subscribe(data => {
                    if (data.json().result = 'SUCCESS') {
                        this.openSnackBar("Ride Frezzed!", "Success");
                    }
                });
        }
    }

    unFreezeRide(event) {
        var currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
        if (JSON.parse(localStorage.getItem('CurrentRide'))) {
            var params = new HttpParams()
                .set('id', currentRide.id)
                .set('freezeRide', 'false');
            this.dashboardService.freezeRiderRide(params.toString())
                .subscribe(data => {
                    if (data.json().result = 'SUCCESS') {
                        this.openSnackBar("Ride Unfrezzed!", "Success");
                    }
                });
        }
    }
}
