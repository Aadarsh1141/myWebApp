import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { NguiMapModule} from '@ngui/map';

@NgModule({
    imports: [
         CommonModule,
         LoginRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule,
         MatTooltipModule,
         MatProgressSpinnerModule,
         NguiMapModule
        ],
    providers:[LoginService],
    declarations: [LoginComponent]
})
export class LoginModule {}
