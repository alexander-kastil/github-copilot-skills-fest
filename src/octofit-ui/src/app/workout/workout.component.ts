import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mt-4">
      <h2>Workouts</h2>
      <div class="mb-3">
        <a [routerLink]="['/workout/edit', '']" class="btn btn-primary"
          >Create New Workout</a
        >
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (workout of workouts(); track workout.id) {
          <tr>
            <td>{{ workout().workoutName }}</td>
            <td>{{ workout().workoutDescription }}</td>
            <td>
              <a
                [routerLink]="['/workout/edit', workout.id]"
                class="btn btn-sm btn-primary me-2"
                >Edit</a
              >
              <button
                (click)="deleteWorkout(workout.id)"
                class="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class WorkoutComponent {
  workoutService = inject(WorkoutService);
  workouts = toSignal(
    this.workoutService.getAll().pipe(tap((val) => console.log(val))),
    { initialValue: [] }
  );

  deleteWorkout(id: string) {
    this.workoutService.delete(id).subscribe();
  }
}
