import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule , } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent} from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatModule } from '../../shared';

import { DashboardService } from './dashboard.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { PassengerListComponent ,PassengerDetails, PassengerChat, PassengerInvitation } from './components/passenger-list/passenger-list.component';
import { PassengerListService } from './components/passenger-list/passenger-list.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RatingModule } from "ng2-rating";
import { FeedbackService } from './components/feedback/feedback.service';
import { NguiMapModule} from '@ngui/map';

import { FeedbackModule } from './components/feedback/feedback.module';
import { TripReportModule } from './components/trip-report/trip-report.module';
import { MapModule } from './components/map/map.module';
import { ChatModule } from './components/chat/chat.module';
import { PassengerListModule } from './components/passenger-list/passenger-list.module';
import { RideModule } from './components/ride/ride.module';
import { RiderListComponent } from './components/rider-list/rider-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyRidesComponent } from './components/my-rides/my-rides.component';
import { MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { MenuModelComponent } from './menu-model/menu-model.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        FeedbackModule,
        TripReportModule,
        MatTooltipModule,
        MapModule,
        ChatModule,
        PassengerListModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatDialogModule,
        NgbModule.forRoot(),
        NguiMapModule.forRoot({
          apiUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC8hqTP9SIzfjGeqSgsrkzsIjWeKRabdMI&libraries=visualization,places,drawing',
      }),
        RideModule
  ],
    declarations: [
        DashboardComponent,
        RiderListComponent,
        ViewProfileComponent,
        MenuModelComponent,
    ],
    entryComponents:[PassengerDetails,PassengerChat,PassengerInvitation, ViewProfileComponent, MenuModelComponent],
    providers:[DashboardService,PassengerListService,FeedbackService]

})
export class DashboardModule {}
