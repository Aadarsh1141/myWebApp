import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRidesComponent } from './my-rides.component';

const routes: Routes = [
    {
        path: '', component: MyRidesComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRidesRoutingModule {
}
