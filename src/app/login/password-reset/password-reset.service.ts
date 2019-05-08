import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment.prod';

const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class PasswordResetService {
    resetPasswordUrl = environment.SIGNUP;
    constructor(private http: Http) { }

    resetPassword(Credentials) {
        var url = this.resetPasswordUrl + '/password';
        return this.http.put(url, Credentials,{ headers: headers});
    }



}