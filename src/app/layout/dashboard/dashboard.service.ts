import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { CurrentRideModel } from './current-ride-model';

const headers = new Headers({
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ',
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Content-Type': 'application/x-www-form-urlencoded'
});

@Injectable()
export class DashboardService {
    temp: {};
    vehicalUrl = environment.VEHICAL;
    createPassangerRideUrl = environment.RIDE_MGMT + '/passengerride';
    riderRideUrl = environment.RIDE_MGMT + '/riderride';
    activeRideUrl = environment.RIDE_MGMT + '/ride/all/active';
    cancelRiderRideUrl = environment.RIDE_MGMT + '/riderride/cancelride';
    updateRiderRideUrl = environment.RIDE_MGMT + '/riderride/update';
    routeMatchingServer = environment.ROUTE_MATCHSERVER;
    user = environment.SIGNUP;
    rideMgmt = environment.RIDEMGM;
    invitePassangerUrl = environment.RIDE_CONNECTIVITY;
    requestRiderUrl = environment.RIDE_CONN;
    billing = environment.BILLING;
    rideMgmtUrl = environment.RIDE_MGMT;

    constructor(private http: Http) { }

    getRiderDetails(id) {
        var url = this.user + 'profile' + '?id=' + id;
        return this.http.get(url, { headers: headers });
    }

    postRide(Credentials) {
        return this.http.post(this.riderRideUrl, Credentials, { headers: headers });
    }

    updateRide(Credentials) {
        return this.http.put(this.updateRiderRideUrl, Credentials, { headers: headers });
    }

    getRideDetails(id) {
        return this.http.get(this.rideMgmtUrl + '/ride/participant/all?id=' + id, { headers: headers });
    }

    cancelPassangerRide(Credentials) {
        var url = this.createPassangerRideUrl + '/cancelride';
        return this.http.put(url, Credentials, { headers: headers });
    }
    findMatchingRiders(Credentials) {
        return this.http.post(this.routeMatchingServer,
            Credentials,
            { headers: headers });
    }
    startRide(Credentials) {
        var url = this.rideMgmt + '/riderride/status';
        return this.http.put(url, Credentials, { headers: headers });
    }

    stopRide(Credentials) {
        return this.http.put(this.rideMgmt + '/riderride/complete', Credentials, { headers: headers });
    }
    getAllRides(userId) {
        return this.http.get(this.rideMgmt + '/ride/all/active?userId=' + userId, { headers: headers });
    }
    getActiveRides(userId) {
        return this.http.get(this.activeRideUrl + '?userId=' + userId, { headers: headers });
    }
    invitePassengers(Credentials) {
        return this.http.put(this.invitePassangerUrl + '/invite/passengers', Credentials, { headers: headers });
    }
    checkInvitations(Credentials) {
        const headers = new Headers({});
        console.log(Credentials);
        return this.http.get('https://testrm.getquickride.com:8443/dishaapiserver/rest/QRRegularridematcher/matchedpassenger',
            { headers: headers, params: Credentials });
    }
    cancelRide(Credentials) {
        return this.http.put(this.cancelRiderRideUrl, Credentials, { headers: headers });
    }
    getDefaultVehicle(userId) {
        var url = this.vehicalUrl + '?ownerid=' + userId;
        return this.http.get(url, { headers: headers });
    }
    getTripReport(Credentials) {
        var url = this.billing + '/QRBilling/rider/utc';
        return this.http.get(url, { headers: headers, params: Credentials });
    }

    createPassangerRide(input) {
        return this.http.post(this.createPassangerRideUrl, input, { headers: headers });
    }

    updatePassangerRide(input) {
        return this.http.put(this.createPassangerRideUrl + '/update', input, { headers: headers });
    }

    getCurrentRideObj() {
        var currentRideObect: CurrentRideModel = {
        } as any;
        return currentRideObect;
    }

    sendRequestRider(input) {
        return this.http.put(this.requestRiderUrl + '/invite/riders/multiple', input, { headers: headers })
    }

    checkInPassanger(input) {
        var url = environment.COMMON + '/passengerride/status';
        return this.http.put(url, input, { headers: headers })
    }
    checkOutPassanger(input) {
        var url = environment.COMMON + '/passengerride/complete';
        return this.http.put(url, input, { headers: headers })
    }

    getPassengerTripReport(input) {
        var url = environment.COMMON + '/billing/passenger';
        return this.http.get(url, { headers: headers, params: input });
    }

    freezeRiderRide(input) {
        var url = environment.RIDEMGM + '/riderride/freezeride';
        return this.http.put(url, input, { headers: headers });
    }
}
