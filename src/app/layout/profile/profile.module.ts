import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProfileRoutingModule } from './profile-routing.module';

import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

//import { ProfileService } from './profile.service';

import { ProfileComponent } from './profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EcoMeterComponent } from './eco-meter/eco-meter.component';
import { MatDialogModule } from '@angular/material';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SuspendAccountComponent } from './suspend-account/suspend-account.component';
import { ProfileService } from './profile.service';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatDialogModule,
        NgbRatingModule.forRoot()
    ],
    exports: [ProfileComponent],
    providers: [ProfileService],
    entryComponents: [EcoMeterComponent, ChangePasswordComponent, SuspendAccountComponent],
    declarations: [ProfileComponent, EcoMeterComponent, ChangePasswordComponent, SuspendAccountComponent],
})
export class ProfileModule { }
