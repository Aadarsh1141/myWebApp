import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PassengerListComponent ,PassengerDetails, PassengerChat, PassengerInvitation } from './passenger-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerListService } from './passenger-list.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PushNotificationModule } from 'ng-push-notification';
import { MatDialogModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

import { RouterModule } from '@angular/router';
import { ViewProfileComponent } from '../view-profile/view-profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatDividerModule,
        PushNotificationModule.forRoot(),  ],

    exports:[PassengerListComponent,PassengerDetails,PassengerChat,PassengerInvitation],
    declarations: [PassengerListComponent,PassengerDetails,PassengerChat,PassengerInvitation],
    entryComponents:[PassengerDetails,PassengerInvitation],
    providers:[PassengerListService],


})
export class PassengerListModule {}
