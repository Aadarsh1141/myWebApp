import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RideComponent } from './ride.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NguiMapModule } from '@ngui/map';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { RouterModule } from '@angular/router';
import { RideService } from './ride.service';
import { AgmDirectionModule } from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import { MatTooltipModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatTooltipModule,
        NgbRatingModule.forRoot(),
        NguiMapModule.forRoot({
            apiUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC8hqTP9SIzfjGeqSgsrkzsIjWeKRabdMI&libraries=visualization,places,drawing',
        },

        ),
        OwlDateTimeModule,
        OwlNativeDateTimeModule
    ],
    exports: [RideComponent],
    declarations: [RideComponent],
    providers: [RideService, DatePipe]
})
export class RideModule { }
