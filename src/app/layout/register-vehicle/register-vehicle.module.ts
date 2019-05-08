import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterVehicleRoutingModule } from './register-vehicle-routing.module';
import { RegisterVehicleComponent } from './register-vehicle.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterVehicleService } from './register-vehicle.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowVehiclesModule } from './show-vehicles/show-vehicles.module';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material';





@NgModule({
    imports: [
         CommonModule,
         RegisterVehicleRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatExpansionModule,
         MatTabsModule,
         ShowVehiclesModule,
         MatSelectModule,
         MatTooltipModule
        ],

    providers:[RegisterVehicleService],
    declarations: [RegisterVehicleComponent]
})
export class RegisterVehicleModule {}
