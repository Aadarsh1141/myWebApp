import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { LayoutService } from './layout.service';




@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        NgbModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers:[MediaMatcher,LayoutService]
})
export class LayoutModule {}
