import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ActivateAccountComponent } from './activate-account.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivateAccountService } from './activate-account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivateAccountRoutingModule } from './activate-account-routing.module';
import { MatSnackBarModule } from '@angular/material';



@NgModule({
    imports: [
         CommonModule,
         ActivateAccountRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatSnackBarModule

        ],
    providers:[ActivateAccountService],
    declarations: [ActivateAccountComponent]
})
export class ActivateAccountModule {}
