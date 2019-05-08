import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { LayoutService } from './layout.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
    profileName;
    constructor(private layoutService:LayoutService) {}

    ngOnInit() {
    }
   
}
