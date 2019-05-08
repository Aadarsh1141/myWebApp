import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';


//Routes for immediate child components
const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'password-reset', loadChildren: './login/password-reset/password-reset.module#PasswordResetModule' },
    { path: 'activate-account', loadChildren: './activate-account/activate-account.module#ActivateAccountModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'ride-profile', loadChildren: './ride-profile/ride-profile.module#RideProfileModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
