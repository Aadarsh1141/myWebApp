import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowVehiclesComponent } from './show-vehicles.component';

const routes: Routes = [
    {
        path: '',
        component: ShowVehiclesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowVehiclesRoutingModule {}
