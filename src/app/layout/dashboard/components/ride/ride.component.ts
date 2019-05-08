import { Component, OnInit, ChangeDetectorRef, ViewChild, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { DirectionsRenderer, NgMapApiLoader } from '@ngui/map';
import { RideService } from './ride.service';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Subscription, Observable } from 'rxjs';



declare var require: any;
declare var google: any;


@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {
  rideRoute: any;
  //time variables
  startTime: string;
  mm: any;
  HH: any;
  yyyy: string;
  MM: any;
  dd: any;
  currentTime: Date;

  color1;
  bgColor1;
  color;
  bgColor;
  offerRides;
  takeRide;
  //
  //Get details from dashboard component
  @Input() ridePosted;
  @Input() rideStart;
  @Input() defaultVehicle;
  @Input() coordinates: any;
  @Input() reschedulePassanger: any;
  //Send data to dashboard component
  @Output()
  pickupCoords = new EventEmitter<string>();

  @Output()
  destinationCoords = new EventEmitter<string>();

  @Output()
  pickupAddress = new EventEmitter<string>();

  @Output()
  rideTime = new EventEmitter<string>();

  @Output()
  Address: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  rideNumberOfSeats = new EventEmitter<string>();

  @Output()
  callPostRide = new EventEmitter<string>();

  @Output()
  callTakeRide = new EventEmitter<string>();

  @Output()
  callEditRide = new EventEmitter<string>();

  @Output()
  callPassangerEditRide = new EventEmitter<any>();

  @Output()
  rideRouteObject = new EventEmitter<string>();



  @Output()
  destinationAddress = new EventEmitter<string>();



  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  typingPickupLocation: boolean;
  typingDestinationLocation: boolean;
  showMarker: boolean;
  showDirections: boolean;
  endAddress: string;
  startAddress: string;

  mapComp: MapComponent;

  allOptions: {};
  latlng: { lat: number; lng: number; };
  lng: number;
  lat: number;
  destLat: number;
  destLng: number;
  destLatLng: { lat: number, lng: number };
  location: Coordinates;
  positions: any;
  autocomplete: any;
  address: any = {};
  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  direction = {};

  currentRide;
  seatOption = [
    '1',
    '2'
  ]

  editedStartAddress: string;
  editedEndAddress: string;
  editedLatLng: { lat: number; lng: number; };
  editedDestLatLng: { lat: number; lng: number; };
  editedRideTime: string;

  vehicleText: string;

  takeRidePickupAddress: string;
  takeRideDropAddress: string;
  takeRideTime: string;
  numberOfSeats: string = null;
  public todayDate: any = new Date();
  showEditButton;
  findCurrentPositionSubscription: Subscription;


  constructor(private ref: ChangeDetectorRef, public datepipe: DatePipe,
    private mapsApiLoader: NgMapApiLoader, private cdr: ChangeDetectorRef, private rideService: RideService, public router: Router) {
  }
  ngOnInit() {
    if (this.reschedulePassanger == "Edit_Ride") {
      this.findRide();
      this.showEditButton = true;
      this.currentRide = JSON.parse(localStorage.getItem('CurrentRide'));
      this.setValue();
    } else {
      this.offerRide();
      this.showEditButton = false;
    }

    this.findCurrentPosition();
    this.typingPickupLocation = false;
    this.typingDestinationLocation = false;
    this.editedStartAddress = null;
    this.editedEndAddress = null;
    this.editedDestLatLng = null;
    this.editedLatLng = null;
    this.editedRideTime = null;
    this.getCurrentTime();
    this.vehicleText = this.defaultVehicle.model + " " + this.defaultVehicle.regno;
    this.currentRide = JSON.parse(localStorage.getItem("CurrentRide"));

    if (this.currentRide !== null) {
      this.startAddress = this.currentRide.startAddress;
      this.endAddress = this.currentRide.endAddress;
      this.startTime = (new Date(this.currentRide.startTime)).toString();
      this.lat = this.currentRide.startLatitude;
      this.lng = this.currentRide.startLongitude;
      this.destLat = this.currentRide.endLatitude;
      this.destLng = this.currentRide.endLongitude;
      this.latlng = {
        lat: this.lat,
        lng: this.lng
      }
      this.destLatLng = {
        lat: this.destLat,
        lng: this.destLng
      }
    }
    this.ridePosted = JSON.parse(localStorage.getItem("RidePosted"));

    this.findCurrentPositionSubscription = Observable.interval(10).subscribe(x => {
      if (JSON.parse(localStorage.getItem('currentAddress'))) {
        this.getCurrentLocation();
        this.findCurrentPositionSubscription.unsubscribe();
      }
    })
  }
  togglePickupLocation() {
    this.typingPickupLocation = !this.typingPickupLocation;
  }
  toggleDestinationLocation() {
    this.typingDestinationLocation = !this.typingDestinationLocation;
  }
  onMapReady(map) {
  }
  onIdle(event) {
  }
  onMarkerInit(marker) {
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }
  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }
  initialiseDirection() {
    this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });
  }

  //Google places autcomplete
  autocompleteDestination(place) {
    this.destLat = place.geometry.location.lat();
    this.destLng = place.geometry.location.lng();
    this.destLatLng = {
      lat: this.destLat,
      lng: this.destLng
    };
    this.editedDestLatLng = this.destLatLng;
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;

    }
    this.ref.detectChanges();
    this.endAddress = place.formatted_address;
    this.takeRideDropAddress = place.formatted_address;
    this.editedEndAddress = place.formatted_address;
    this.destinationAddress.emit(this.endAddress);
    this.destinationCoords.emit(JSON.stringify(this.destLatLng));
  }

  autocompletePickup(place) {
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.latlng = {
      lat: this.lat,
      lng: this.lng
    };

    this.editedLatLng = this.latlng;
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;

    }
    this.ref.detectChanges();
    this.startAddress = place.formatted_address;
    this.takeRidePickupAddress = place.formatted_address;
    this.editedStartAddress = place.formatted_address;
    this.pickupAddress.emit(this.startAddress);
    this.pickupCoords.emit(JSON.stringify(this.latlng));
    this.ref.detectChanges();
  }
  public getCurrentTime() {
    this.currentTime = new Date();
    this.getStartTime();
  }
  getStartTime() {
    this.dd = this.addTrailingZeroToDate(this.currentTime.getDate());
    this.MM = this.addTrailingZeroToDate(this.currentTime.getMonth() + 1);
    this.yyyy = this.currentTime.getFullYear().toString();
    this.HH = this.addTrailingZeroToDate(this.currentTime.getHours());
    this.mm = this.addTrailingZeroToDate(this.currentTime.getMinutes());

    //this.mm.

    //this.startTime = (this.dd + this.MM + this.yyyy + this.HH + this.mm);

    this.dd = this.addTrailingZeroToDate(this.currentTime.getUTCDate());
    this.MM = this.addTrailingZeroToDate(this.currentTime.getUTCMonth() + 1);
    this.yyyy = this.currentTime.getUTCFullYear().toString();
    this.HH = this.addTrailingZeroToDate(this.currentTime.getUTCHours());
    this.mm = this.addTrailingZeroToDate(this.currentTime.getUTCMinutes());
    this.editedRideTime = (this.dd + this.MM + this.yyyy + this.HH + this.mm);
    this.startTime = this.editedRideTime
    /*var new_dt = new Date(this.editedRideTime)
    new_dt.add*/

  }

  addTrailingZeroToDate(unit) {
    unit = unit > 9 ? unit : '0' + unit;
    return unit.toString();
  }

  //Emit all data to dashboard component
  postRide() {
    this.pickupAddress.emit(this.startAddress);
    this.pickupCoords.emit(JSON.stringify(this.latlng));
    this.destinationAddress.emit(this.endAddress);
    this.destinationCoords.emit(JSON.stringify(this.destLatLng));
    this.rideTime.emit(this.startTime);
    this.callPostRide.emit("true");
  }
  getRideRoute() {

    this.rideService.getRideRoute(this.currentRide.routeId)
      .subscribe(
        (response) => {
          this.rideRoute = response.json().resultData;
          this.rideRouteObject.emit(JSON.stringify(this.rideRoute));
          this.callEditRide.emit("true");
        },
        (error) => {
          alert(error.json().resultData.userMsg);
        }
      );

  }
  //Emit all data to dashboard component
  editRide() {
    this.getRideRoute();
    this.pickupAddress.emit(this.editedStartAddress);
    this.pickupCoords.emit(JSON.stringify(this.editedLatLng));
    this.destinationAddress.emit(this.editedEndAddress);
    this.destinationCoords.emit(JSON.stringify(this.editedDestLatLng));
    this.destinationAddress.emit(this.editedEndAddress);
    this.rideTime.emit(this.editedRideTime);
  }
  showAllVehicles() {
    this.router.navigateByUrl("/show-vehicles");
  }

  findRide() {
    this.bgColor1 = 'black';
    this.color1 = '#fff';
    this.color = 'dimgray';
    this.bgColor = '#fff';
    this.takeRide = true;
    this.offerRides = false;
  }
  offerRide() {
    this.color = '#fff';
    this.bgColor = '#000';
    this.bgColor1 = '#fff';
    this.color1 = 'dimgray';
    this.offerRides = true;
    this.takeRide = false;
  }

  getCurrentLocation() {
    this.startAddress = JSON.parse(localStorage.getItem('currentAddress'));
    this.takeRidePickupAddress = JSON.parse(localStorage.getItem('currentAddress'));
  }

  findCurrentPosition() {
    this.mapsApiLoader.api$.subscribe(googleMaps => {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.latlng = { lat: this.lat, lng: this.lng }; //It is important that you use this lat lng format
        this.codeLatLng(this.lat, this.lng);
      });
    });
    this.mapsApiLoader.load();
    //this.getCurrentLocation();
  }

  geocoder;
  mapAddress: any;

  codeLatLng(lat, lng) {
    this.geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);
    this.geocoder.geocode({
      'latLng': latlng
    }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          var mAddress = results[1].formatted_address;
          localStorage.setItem('currentAddress', JSON.stringify(mAddress));
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  }

  takeRideButtonClicked() {
    this.pickupAddress.emit(this.takeRidePickupAddress);
    this.pickupCoords.emit(JSON.stringify(this.latlng));
    this.destinationAddress.emit(this.takeRideDropAddress);
    this.destinationCoords.emit(JSON.stringify(this.destLatLng));
    this.rideTime.emit(this.startTime);
    this.rideNumberOfSeats.emit(this.numberOfSeats);
    this.callTakeRide.emit("true");
  }
  setValue() {
    this.takeRidePickupAddress = this.currentRide.startAddress;
    this.takeRideDropAddress = this.currentRide.endAddress;
    this.numberOfSeats = this.currentRide.paramsMap.noOfSeats;
    this.latlng = {
      lat: this.currentRide.startLatitude,
      lng: this.currentRide.startLongitude
    }
    this.destLatLng = {
      lat: this.currentRide.endLatitude,
      lng: this.currentRide.endLongitude
    }
  }

  EditRideButtonClicked() {
    this.callPassangerEditRide.emit("true");
  }
}
