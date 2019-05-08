import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './password-reset.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordResetService } from './password-reset.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatSnackBarModule } from '@angular/material';



@NgModule({
    imports: [
         CommonModule,
         PasswordResetRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatTooltipModule,
         MatSnackBarModule
        ],
    providers:[PasswordResetService],
    declarations: [PasswordResetComponent]
})
export class PasswordResetModule {}
