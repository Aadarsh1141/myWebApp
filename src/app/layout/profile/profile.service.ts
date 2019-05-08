import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class ProfileService {
    url = environment.USERMGMT;
    constructor(private http: Http) { }

    changePassword(Credentials) {
        var updateUrl = this.url + '/password';
        return this.http.put(updateUrl, Credentials, { headers: headers });
    }
}