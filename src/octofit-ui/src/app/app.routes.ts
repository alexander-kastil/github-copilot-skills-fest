import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { UsersComponent } from './user/users.component';
import { UserEditComponent } from './user/user-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leaderboards', component: LeaderboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: '**', redirectTo: '' },
];
