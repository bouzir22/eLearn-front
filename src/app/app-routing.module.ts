import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { Register1Component } from './register1/register1.component';
import { TutorComponent } from './tutor/tutor.component';
import { TutorsComponent } from './tutors/tutors.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginSComponent } from './login-s/login-s.component';

const routes: Routes = [
  { path: 'tutors', component: TutorsComponent, canActivate: [AuthGuard] },
  { path: 'acceuil', component: LandingComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'player/:id/:name', component: PlayerComponent },
  { path: 'tutor/:id', component: TutorComponent },
  { path: 'edit', component: Register1Component },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginSComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
