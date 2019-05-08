import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ShowVehiclesRoutingModule } from './show-vehicles-routing.module';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowVehicleService } from './show-vehicles.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowVehiclesComponent } from './show-vehicles.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule, MatTooltipModule } from '@angular/material';

import { EditVehicleModule } from './edit-vehicle/edit-vehicle.module';





@NgModule({
    imports: [
         CommonModule,
         ShowVehiclesRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatExpansionModule,
         MatDividerModule,
         EditVehicleModule,
         MatTooltipModule
        ],
    exports:[ShowVehiclesComponent],
    providers:[ShowVehicleService],
    declarations: [ShowVehiclesComponent]
})
export class ShowVehiclesModule {}
