import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule, MatCommonModule, MatStepperModule, MatButtonModule, MatCardModule } from '@angular/material';
import { PreferencesRoutingModule } from './preference.routing.module';
import { PreferencesComponent } from './preferences.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LoginService } from '../login/login.service';
import { PreferencesService } from './preferences.services';
import { SharedService } from '../shared/shared.service';

@NgModule({
    imports: [
        MatCommonModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        FormsModule,
        MatCardModule,
        MatStepperModule,
        MatButtonModule,
        PreferencesRoutingModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CommonModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule
    ],
    providers: [LoginService, PreferencesService, SharedService],
    declarations: [PreferencesComponent]
})
export class PreferencesModule { }