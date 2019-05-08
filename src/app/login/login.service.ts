import { Injectable, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class LoginService {
    loginUrl = environment.LOGIN;
    user = environment.SIGNUP;
    usermgmt = environment.USERMGMT;
    temp: {};
    constructor(private http: Http) { }

    login(Credentials) {
        // var url = this.loginUrl + '?userId=' + userId + '&pwd=' + pwd + '&appName=Quick Ride&phoneModel=' + phoneModel;       
        return this.http.put(this.loginUrl+'/loginandupdate', Credentials, { headers: headers });
    }

    getUser(phone: any) {
        var url = this.user+'?phone='+phone;
        return this.http.get(url, { headers: headers });
    }
    
}