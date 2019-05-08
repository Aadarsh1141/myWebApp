
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';

const headers = new Headers({
    'APP-TOKEN': 's16-q9fz-jy3p-rk',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ'
});

@Injectable()
export class TripReportService {
    url = environment.FAV_PARTNER;
    constructor(private http: Http) { }
    markFavourite(input) {
        return this.http.post(this.url,
            input,
            { headers: headers });
    }

}
