import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowRiderListComponent } from './show-rider-list.component';

const routes: Routes = [
    {
        path: '',
        component: ShowRiderListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowRiderListRoutingModule {}
