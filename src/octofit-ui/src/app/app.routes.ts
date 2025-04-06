import { Routes } from '@angular/router';
import { WorkoutEditComponent } from './workout/workout-edit.component';
import { WorkoutComponent } from './workout/workout.component';

export const routes: Routes = [
  { path: 'workout', component: WorkoutComponent },
  { path: 'workout/edit/:id', component: WorkoutEditComponent },
  { path: '', redirectTo: 'workout', pathMatch: 'full' },
];
