import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TripReportRoutingModule} from './trip-report-routing.module';

import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

import { TripReportService } from './trip-report.service';

import { TripReportComponent } from './trip-report.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
    imports: [
         CommonModule,
         TripReportRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatExpansionModule,
         MatSnackBarModule,
         NgbRatingModule.forRoot()
        ],
        exports:[TripReportComponent],
    declarations: [TripReportComponent],
    providers:[TripReportService]
})
export class TripReportModule {}
