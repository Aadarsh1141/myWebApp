import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChatRoutingModule} from './chat-routing.module';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';


@NgModule({
    imports: [
         CommonModule,
         ChatRoutingModule,
         NgbCarouselModule.forRoot(),
         NgbAlertModule.forRoot(),
         ReactiveFormsModule
        ],
    exports:[ChatComponent],
    declarations: [ChatComponent],
    providers:[ChatService]
})
export class ChatModule {}
