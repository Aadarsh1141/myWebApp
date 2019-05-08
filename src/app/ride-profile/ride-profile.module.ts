import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RideProfileRoutingModule } from './ride-profile-routing.module';
import { RideProfileComponent } from './ride-profile.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RideProfileService } from './ride-profile.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material';



@NgModule({
    imports: [
         CommonModule,
         RideProfileRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatTooltipModule
        ],
    providers:[RideProfileService],
    declarations: [RideProfileComponent]
})
export class RideProfileModule {}
