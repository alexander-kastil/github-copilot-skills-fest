import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h3>{{ id() ? 'Edit' : 'Create' }} User</h3>
      </div>
      <div class="card-body">
        <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label for="userName" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              formControlName="userName"
              required
            />
            @if (userForm.get('userName')?.errors?.['required'] && userForm.get('userName')?.touched) {
              <small class="text-danger">Username is required</small>
            }
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              formControlName="email"
              required
            />
            @if (userForm.get('email')?.errors?.['required'] && userForm.get('email')?.touched) {
              <small class="text-danger">Email is required</small>
            }
            @if (userForm.get('email')?.errors?.['email'] && userForm.get('email')?.touched) {
              <small class="text-danger">Invalid email format</small>
            }
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              formControlName="password"
              required
            />
            @if (userForm.get('password')?.errors?.['required'] && userForm.get('password')?.touched) {
              <small class="text-danger">Password is required</small>
            }
          </div>

          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary" [disabled]="!userForm.valid">
              Save
            </button>
            <button type="button" class="btn btn-secondary" (click)="cancel()">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class UserEditComponent {
  id = input<string>();
  fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);

  user = new User();

  userForm = this.fb.group({
    id: [this.user.id],
    userName: [this.user.userName, Validators.required],
    email: [this.user.email, [Validators.required, Validators.email]],
    password: [this.user.password, Validators.required],
  });

  userUpdate = effect(() => {
    if (this.id() && this.id() !== '0') {
      this.userService.getById(this.id()!).subscribe((user) => {
        this.userForm.patchValue(user);
      });
    }
  });

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value as User;
      const operation = this.id() && this.id() !== '0'
        ? this.userService.update(this.id()!, user)
        : this.userService.create(user);

      operation.subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}