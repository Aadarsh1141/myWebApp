import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedService } from '../shared/shared.service';
import { ReferralCodeComponent } from './referral-code/referral-code.component';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [SignupService, SharedService],
  declarations: [SignupComponent, ReferralCodeComponent],
  entryComponents: [ReferralCodeComponent]
})
export class SignupModule { }
