import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule, MatDialogModule, MatProgressSpinnerModule, MatTabsModule } from '@angular/material';
import { ShowRiderListService } from './show-rider-list.service';
import { ShowRiderListRoutingModule } from './show-rider-list-routing.module';
import { ShowRiderListComponent } from './show-rider-list.component';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatTooltipModule,
        ShowRiderListRoutingModule,
        MatDialogModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        NgbRatingModule.forRoot(),
        MatTabsModule
    ],
    exports: [],
    declarations: [ShowRiderListComponent],
    providers: [ShowRiderListService],
    entryComponents: []
})
export class ShowRiderListModule { }
