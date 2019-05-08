import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SharedService {
    public dishaapiserver;
    public activemq;
    public rideengine;
    public routematch;
    constructor(private http: Http) {
        this.dishaapiserver = "https://testrm.getquickride.com:8443/dishaapiserver/";
        this.activemq = "http://18.204.180.111:8080";
        this.rideengine="http://18.232.45.129:8080/rideengine/";
        this.routematch = "https://testrr.getquickride.com:8443/routematchserver/";
     }
}