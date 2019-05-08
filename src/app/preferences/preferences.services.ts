import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { SharedService } from '../shared/shared.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
    headers: new HttpHeaders({
        'APP-TOKEN': 's16-q9fz-jy3p-rk',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
    })
};

@Injectable()
export class PreferencesService {
    saveImageUrl = environment.SAVE_IMAGE;
    constructor(private http: HttpClient, private service: SharedService) { }

    saveImage(input: any, phone: any) {
        var body1 = new HttpParams()
            .set('phone', phone)
            .set('photo', input)
        return this.http.post(this.saveImageUrl, body1, httpOptions);
    }

    /* checkSignup(Credentials) {
         return this.http.post(this.saveImageUrl, Credentials, httpOptions);
     }
 
     checkReferralCode(input: string) {
         var url = this.referralCodeUrl+'?referralCode='+input;
         return this.http.get(url, httpOptions);
     }*/
}