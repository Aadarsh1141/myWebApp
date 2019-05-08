import { Component, OnInit, ChangeDetectorRef, ViewChild, Output, EventEmitter, Input, AfterViewInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DirectionsRenderer } from '@ngui/map';

import { NgMapApiLoader } from '@ngui/map';


declare var require: any;
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
/*
* Refer to ng2ui map official docs https://github.com/ng2-ui/map for functionality reference .
*/

export class MapComponent implements OnInit, AfterViewInit {

  //Flags to be used to change map markers accordingly . Fetching from dashboard component;
  @Input() ridePosted;
  @Input() rideStart;

  //Lat lng variables getting coordinates from autocomplete pickup and destination . Fetching from dashboard component ;
  @Input() pickup;
  @Input() dest;

  //Send current location coordinates to dashboard component
  @Output()
  pickupCoords = new EventEmitter<string>();

  @Output()
  destinationCoords = new EventEmitter<string>();
  //Send current location address to dashboard component
  @Output()
  pickupAddress = new EventEmitter<string>();

  @Output() freezeRideCalled = new EventEmitter<any>();
  @Output() unfreezeRideCalled = new EventEmitter<any>();
  @Output() riderScheduleCalled = new EventEmitter<any>();
  @Output() passengerScheduleCalled = new EventEmitter<any>();
  @Output() riderCancelCalled = new EventEmitter<any>();
  @Output() passengerCancelCalled = new EventEmitter<any>();

  rideFlag = 0;

  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  showMarker: boolean;
  showDirections: boolean;

  endAddress: string;
  startAddress: string;

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
  tempDirectionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  direction = {};
  MAP_OBJ;
  showCurrentRide: any;
  showRideDetails = false;
  showFreezeRide = false;
  showLockButton = false;
  showUnlockButton = false;
  constructor(private ref: ChangeDetectorRef, private cdr: ChangeDetectorRef, private mapsApiLoader: NgMapApiLoader,
  ) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('showCurrentRide'))) {
      this.showCurrentRide = JSON.parse(localStorage.getItem('showCurrentRide'));
      this.showRideDetails = true;
      this.showFreezeRide = true;
    } else {
      this.showRideDetails = false;
      this.showFreezeRide = false;
    }
    this.showDirections = true;
    this.showMarker = true;
    this.getLocalData();
    //Get current user location when map component loads
    this.findCurrentPosition();
    //Initialise direction renderer
    this.initialiseDirection();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.pickup !== null && this.dest !== null) {
      this.showMapDirections(this.pickup, this.dest);
    }
  }
  setMapNull() {
    this.directionsRenderer.setMap(null);
  }
  //Removes map directions .
  refreshMap() {
    this.directionsRenderer.setOptions({
      polylineOptions: { strokeWeight: 0 },
      draggable: true,
      map: null
    });
    this.pickup = null;
    this.dest = null;
    this.rideFlag = 1;
  }
  ngAfterViewInit() {
    // this.reverseGeocoding();
  }
  getLocalData() {
    this.ridePosted = JSON.parse(localStorage.getItem("RidePosted"));
    this.rideStart = JSON.parse(localStorage.getItem("RideStatus"));
  }

  showDeatils() {
    if (JSON.parse(localStorage.getItem('showCurrentRide'))) {
      this.showCurrentRide = JSON.parse(localStorage.getItem('showCurrentRide'));
      if (this.showCurrentRide.vehicleNumber) {
        this.showLockButton = true;
        this.showUnlockButton = false;
      }
      this.showRideDetails = true;
      this.showFreezeRide = true;
    } else {
      this.showRideDetails = false;
      this.showFreezeRide = false;
    }
  }

  onMapReady(map) {
    this.MAP_OBJ = map;
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
  //Getting current location
  public findCurrentPosition() {
    this.mapsApiLoader.api$.subscribe(googleMaps => {
      // use as google.maps
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          this.location = position.coords;
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.latlng = { lat: this.lat, lng: this.lng }; //It is important that you use this lat lng format

          this.pickupCoords.emit(JSON.stringify(this.latlng));
          this.setMarker();

          // this.reverseGeocoding();
        });
      } else {
        //Error message to be added
        alert("Location not found ! Please enable location or refresh !");
      }

    });
    this.mapsApiLoader.load();
  }

  //Location marker
  markerIconUrl() {
    return require('assets/images/icon_location_marker_red.png');

  }
  //Markers during ride
  rideMarkerUrl() {
    if (this.rideStart) {
      return require('assets/images/bike_ic.png');
    }
    else {
      return require('assets/images/marker.png');
    }
  }


  //Convert coordinates to Address

  public reverseGeocoding() {

    const geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(this.lat, this.lng);
    //  localStorage.setItem("latlng",JSON.stringify(this.latlng));

    geocoder.geocode({ 'location': latlng }, function (results, status) {
      var promise = new Promise((resolve, reject) => {
        if (status) {
          if (results !== null) {
            if (results[0]) {
              this.startAddress = results[0].formatted_address;
              (<HTMLInputElement>document.getElementById('pickupAddress')).value = this.startAddress;
              resolve();
            } else {
              window.alert('No results found');
            }
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }

      }).then(function () {
      });
    });
  }
  showMapDirections(pickup, dest) {
    this.showDirections = true;
    if (pickup !== null && dest !== null && pickup !== undefined && dest !== undefined) {
      this.resetStrokeWeight();
      this.direction = {
        origin: pickup,
        destination: dest,
        travelMode: 'DRIVING',
      };
    }
  }
  hideMapDirections(pickup, dest) {
    this.showDirections = true;
    this.directionsRenderer.setMap(this.MAP_OBJ);
    this.direction = {
      origin: pickup,
      destination: dest,
      travelMode: 'DRIVING',
      strokeweight: 0
    };
  }
  //Make map directions available
  resetStrokeWeight() {
    if (this.directionsRenderer !== null && this.directionsRenderer !== undefined) {
      this.directionsRenderer.setOptions({ polylineOptions: { strokeWeight: 2 }, draggable: true, map: this.MAP_OBJ });
    }
  }
  //Marker options
  setMarker() {
    this.allOptions = {
      center: this.latlng,
      zoom: 15,
      tilt: 45,
      size: 16
    };
  }
  freezeRide() {
    this.freezeRideCalled.emit(true);
    this.showLockButton = false;
    this.showUnlockButton = true;
  }


  unFreezeRide() {
    this.unfreezeRideCalled.emit(true);
    this.showLockButton = true;
    this.showUnlockButton = false;
  }

  reschedule() {
    if (JSON.parse(localStorage.getItem('showCurrentRide'))) {
      this.showCurrentRide = JSON.parse(localStorage.getItem('showCurrentRide'));
      if (this.showCurrentRide.vehicleNumber) {
        this.riderScheduleCalled.emit(true);
      }
    } else {
      this.passengerScheduleCalled.emit(true);
    }
  }
  cancel() {
    if (JSON.parse(localStorage.getItem('showCurrentRide'))) {
      this.showCurrentRide = JSON.parse(localStorage.getItem('showCurrentRide'));
      if (this.showCurrentRide.vehicleNumber) {
        this.riderCancelCalled.emit(true);
      }
    } else {
      this.passengerCancelCalled.emit(true);
    }
  }
}
