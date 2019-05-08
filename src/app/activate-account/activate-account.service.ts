import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpParams } from '@angular/common/http';
const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class ActivateAccountService {
    activateUserUrl = environment.SIGNUP;
    temp: {};
    constructor(private http: Http) { }

    checkActivation(phone, activationCode) {
        /*var url = this.activateUserUrl+'/activateuser'+'?userId='+phone+'&activationCode='+activationCode+'&appName='+appName;
        console.log("url is", url);
        return this.http.get(url, { headers: headers },
        );*/
        return this.http.get(this.activateUserUrl+'/activateuser?userId='+phone+'&activationCode='+activationCode+'&appName=Quick Ride',
            { headers: headers});
    }

    resendActivationCode(Credentials) {
        var url = environment.SIGNUP;
        return this.http.put(url +'/resend/activationcode', Credentials, { headers: headers });
    }


}