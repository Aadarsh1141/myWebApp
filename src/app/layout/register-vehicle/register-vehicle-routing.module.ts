import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterVehicleComponent } from './register-vehicle.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterVehicleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterVehicleRoutingModule {}
