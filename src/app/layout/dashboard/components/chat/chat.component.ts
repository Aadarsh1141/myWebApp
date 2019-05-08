import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    @Input() sourceId;
    @Input() destId;
    constructor(public chatService:ChatService) {

     }
    ngOnInit() {
        console.log(this.sourceId);
        console.log(this.destId);
     }

}
