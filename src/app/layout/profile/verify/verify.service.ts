import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class VerifyService {
    url =  environment.SIGNUP;
    constructor(private http: Http) { }

    updateUser(Credentials) {
        var updateUrl  = this.url+'profile/update';
        return this.http.put(updateUrl,Credentials,{headers:headers});
    }
    getGender(Credentials) {
        const headers = new Headers({});
       //console.log(Credentials);
        return this.http.get('https://testrm.getquickride.com:8443/dishaapiserver/rest/QRUser/gender',{headers:headers,params:Credentials});
    }



}