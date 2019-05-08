import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InviteListRoutingModule} from './invite-list-routing.module';

import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';


import { InviteListComponent } from './invite-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PassengerListService } from '../passenger-list.service';
import { MatTooltipModule, MatDialogModule, MatProgressSpinnerModule, MatTabsModule } from '@angular/material';
import { ViewProfileComponent } from '../../view-profile/view-profile.component';
import { PassengerViewProfileComponent } from './passenger-view-profile/passenger-view-profile.component';




@NgModule({
    imports: [
         CommonModule,
         InviteListRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatTooltipModule,
         MatDialogModule,
         MatExpansionModule,
         MatProgressSpinnerModule,
         MatTabsModule,
         MatSnackBarModule,
         NgbRatingModule.forRoot()
        ],
        exports:[InviteListComponent],
    declarations: [InviteListComponent, PassengerViewProfileComponent],
    providers:[PassengerListService],
    entryComponents: [PassengerViewProfileComponent]
})
export class InviteListModule {}
