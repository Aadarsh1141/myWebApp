import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { SharedService } from '../shared/shared.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SignUp } from './signup-model';
const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class SignupService {
    signUpUrl = environment.SIGNUP;
    referralCodeUrl = environment.REFERRAL_CODE;
    temp: {};
    constructor(private http: Http, private service: SharedService) { }

    checkSignup(Credentials) {
        return this.http.post(this.signUpUrl+'?countryCode=+91&', Credentials, { headers: headers });
    }

    checkReferralCode(input: string) {
        var url = this.referralCodeUrl+'?referralCode='+input;
        return this.http.get(url, { headers: headers });
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getSignUpObject() {
        var signUpObj: SignUp = {
            phone: '',
            pwd: '',
            name: '',
            email: '',
            gender: '',
            status: '',
            referralCode: '',
            countryCode: '',
            androidAppVersionName: '',
            appName: '',
            deviceUniqueId: ''
        } as any;
        return signUpObj
    }

}