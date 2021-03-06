import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FeedbackService } from './feedback.service';

import { FeedbackComponent } from './feedback.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
    imports: [
         CommonModule,
         FormsModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatExpansionModule,
         MatSnackBarModule,
         NgbRatingModule.forRoot()
        ],


    declarations: [FeedbackComponent],
    exports:[FeedbackComponent],
    providers:[FeedbackService]
})
export class FeedbackModule {}
