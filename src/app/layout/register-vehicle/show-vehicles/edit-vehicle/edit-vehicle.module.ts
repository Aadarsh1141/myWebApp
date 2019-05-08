import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { EditVehicleService } from './edit-vehicle.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditVehicleComponent } from './edit-vehicle.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule, MatSelectModule } from '@angular/material';
import { EditVehicleRoutingModule } from './edit-vehicle.routing.module';






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
         MatExpansionModule,
         MatDividerModule,
         MatSelectModule,
         EditVehicleRoutingModule
        ],
    exports:[EditVehicleComponent],
    providers:[EditVehicleService],
    declarations: [EditVehicleComponent, EditVehicleComponent]
})
export class EditVehicleModule {}
