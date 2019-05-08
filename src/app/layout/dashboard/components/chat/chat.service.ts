
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ChatService {
    temp: {};
    constructor(private http: Http) { }

    invitePassengers(Credentials) {
        const headers = new Headers({});
        console.log(Credentials);
        return this.http.put('https://testrm.getquickride.com:8443/dishaapiserver/rest/QRRidematcher/invite/passengers',Credentials,{headers:headers});
    }

    findMatchingRiders(Credentials) {
        const headers = new Headers({});
        console.log(Credentials);
        return this.http.post('http://13.126.226.56:8080/routematchserver/rest/QRRoutematcher/passengersWithOldMatches',Credentials,{headers:headers});
    }
}