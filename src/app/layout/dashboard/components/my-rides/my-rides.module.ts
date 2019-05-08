import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule , } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MyRidesComponent } from './my-rides.component';
import { MyRidesRoutingModule } from './my-rides-routing.moule';
import { MatTabsModule } from '@angular/material';
import { MyRidesService } from './my-rides.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        FormsModule,
        MyRidesRoutingModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatInputModule,
        NgbModule.forRoot(),
  ],
    declarations: [
       MyRidesComponent
    ],
    entryComponents:[],
    providers:[MyRidesService]

})
export class MyRidesModule{}