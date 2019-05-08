import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RideProfileComponent } from './ride-profile.component';

const routes: Routes = [
    {
        path: '',
        component: RideProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RideProfileRoutingModule {}
