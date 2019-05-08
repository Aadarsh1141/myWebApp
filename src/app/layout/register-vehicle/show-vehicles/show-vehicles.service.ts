import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

const headers = new Headers({
    'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ',
    'APP-TOKEN':'s16-q9fz-jy3p-rk',
    'Content-Type':'application/x-www-form-urlencoded'
});

@Injectable()
export class ShowVehicleService {
    vehicalUrl = environment.VEHICAL;
    constructor(private http: Http) { }

    getVehicle(input:any) {
        var url = this.vehicalUrl+'/all/vehicles'+'?ownerid='+input;
        return this.http.get(url, { headers: headers });
    }

    deleteVehicle(Credentials){
        return this.http.put(this.vehicalUrl+'/update',Credentials, { headers: headers });
    }

}