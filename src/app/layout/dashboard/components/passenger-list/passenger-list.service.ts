
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';

const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class PassengerListService {
    temp: {};
    url = environment.RIDE_CONNECTIVITY;
    rideMgmtUrl = environment.RIDE_MGMT;
    passangerMatchServer = environment.PASSANGER_ROUTE_MATCHSERVER;
    rideConn = environment.RIDE_CONN;
    user = environment.SIGNUP;
    unJoinUrl = environment.RIDEMGM;
    public inviteList: any;
    constructor(private http: Http) { }

    invitePassengers(Credentials) {
        return this.http.put(this.rideConn + '/invite/passengers/multiple', Credentials, { headers: headers });
    }

    findMatchingRiders(Credentials: any) {
        return this.http.post(this.passangerMatchServer, Credentials, { headers: headers });
    }

    sendChat(Credentials) {
        const headers = new Headers({});
        console.log(Credentials);
        return this.http.put("https://testrm.getquickride.com:8443/dishaapiserver/rest/QRConversation/conversationDeviceNotification", Credentials, { headers: headers });
    }
    getRideDetails(id) {
        return this.http.get(this.rideMgmtUrl + '/ride/participant/all?id=' + id, { headers: headers });
    }
    addPassenger(Credentials) {
        console.log(Credentials);
        const headers = new Headers({});
        return this.http.put("https://testrm.getquickride.com:8443/dishaapiserver/rest/QRRidematcher/joinrides", Credentials, { headers: headers });
    }

    getUser(phone: any) {
        var url = this.user + '?phone=' + phone;
        return this.http.get(url, { headers: headers });
    }
    getRiderDetails(id) {
        var url = this.user + 'profile' + '?id=' + id;
        return this.http.get(url, { headers: headers });
    }

    unjoinPassenger(input: any) {
        var url = this.unJoinUrl + '/ride/unjoin';
        return this.http.put(url, input, { headers: headers });
    }

}