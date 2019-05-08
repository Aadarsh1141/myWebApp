import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        //Add all routes under layout component here
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'my-rides', loadChildren: './dashboard/components/my-rides/my-rides.module#MyRidesModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'register-vehicle', loadChildren: './register-vehicle/register-vehicle.module#RegisterVehicleModule' },
            { path: 'show-vehicles', loadChildren: './register-vehicle/show-vehicles/show-vehicles.module#ShowVehiclesModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'verify', loadChildren: './profile/verify/verify.module#VerifyModule' },
            { path: 'chat', loadChildren: './dashboard/components/chat/chat.module#ChatModule' },
            { path: 'blank', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'invite-list', loadChildren: './dashboard/components/passenger-list/invite-list/invite-list.module#InviteListModule' },
            { path: 'trip-report', loadChildren: './dashboard/components/trip-report/trip-report.module#TripReportModule' },
            { path: 'map', loadChildren: './dashboard/components/map/map.module#MapModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
            , { path: 'rider-invite-list', loadChildren: './dashboard/components/rider-list/show-rider-list/show-rider-list.module#ShowRiderListModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
