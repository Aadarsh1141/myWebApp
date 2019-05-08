import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VerifyRoutingModule} from './verify-routing.module';

import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

import { VerifyService } from './verify.service';

import { VerifyComponent } from './verify.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material';





@NgModule({
    imports: [
         CommonModule,
         VerifyRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatExpansionModule,
         MatSnackBarModule,
         MatTooltipModule,
         NgbRatingModule.forRoot()
        ],
        exports:[VerifyComponent],
        providers:[VerifyService],
    declarations: [VerifyComponent],
})
export class VerifyModule {}
