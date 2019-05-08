import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripReportComponent } from './trip-report.component';

const routes: Routes = [
    {
        path: '',
        component: TripReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TripReportRoutingModule {}
