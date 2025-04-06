import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-4">
      <h2>{{ id() ? 'Edit' : 'Create' }} Workout</h2>
      <form [formGroup]="workoutForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="workoutName" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="workoutName"
            formControlName="workoutName"
          />
          @if (workoutForm.get('workoutName')?.errors?.['required'] &&
          workoutForm.get('workoutName')?.touched) {
          <div class="text-danger">Name is required</div>
          }
        </div>

        <div class="mb-3">
          <label for="workoutDescription" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="workoutDescription"
            formControlName="workoutDescription"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="!workoutForm.valid"
        >
          Save
        </button>
      </form>
    </div>
  `,
})
export class WorkoutEditComponent {
  id = input.required<string>();
  workoutService = inject(WorkoutService);
  router = inject(Router);
  fb = inject(FormBuilder);

  workout = this.id() ? toSignal(this.workoutService.getById(this.id())) : null;

  workoutForm = this.fb.group({
    workoutName: ['', [Validators.required]],
    workoutDescription: [''],
  });

  constructor() {
    // if (this.workout) {
    //   this.workout.subscribe(workout => {
    //     if (workout) {
    //       this.workoutForm.patchValue(workout);
    //     }
    //   });
    // }
  }

  onSubmit() {
    if (this.workoutForm.valid) {
      const workoutData = this.workoutForm.value;

      const observable = this.id()
        ? this.workoutService.update({ ...workoutData, id: this.id() } as any)
        : this.workoutService.create(workoutData as any);

      observable.subscribe(() => {
        this.router.navigate(['/workout']);
      });
    }
  }
}
