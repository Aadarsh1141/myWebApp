import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteListComponent } from './invite-list.component';

const routes: Routes = [
    {
        path: '',
        component: InviteListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InviteListRoutingModule {}
