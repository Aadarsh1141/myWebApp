import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NguiMapModule} from '@ngui/map';
import { MapRoutingModule } from './map-routing.module';
import { AgmCoreModule } from "@agm/core";
import { MatIconModule, MatMenuTrigger, MatMenuModule, MatGridListModule, MatTooltipModule } from '@angular/material';

const API_KEY ="AIzaSyC8hqTP9SIzfjGeqSgsrkzsIjWeKRabdMI";

@NgModule({
    imports: [
         CommonModule,
         MapRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatListModule,
         MatIconModule,
         MatGridListModule,
         MatTooltipModule,
         MatMenuModule,
         MatExpansionModule,
         MatSnackBarModule,
         NgbRatingModule.forRoot(),
         NguiMapModule.forRoot({
             apiUrl: 'https://maps.googleapis.com/maps/api/js?key='+API_KEY+'&libraries=visualization,places,drawing',

        },
    )

    ],
    exports:[MapComponent],
    declarations: [MapComponent]
})
export class MapModule {}
