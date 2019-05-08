import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class RideProfileService {
    temp: {};
    constructor(private http: Http) { }

    login(Credentials) {
        const headers = new Headers({});
        console.log(Credentials);
        return this.http.put('https://testrm.getquickride.com:8443/dishaapiserver/rest/QRUser/loginAndUpdate',Credentials,{headers:headers});
    }



}