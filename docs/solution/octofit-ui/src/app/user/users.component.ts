import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from './user.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Users</h2>
      <button class="btn btn-primary" routerLink="edit/0">Add User</button>
    </div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (user of users(); track user.id) {
            <tr>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button class="btn btn-sm btn-primary me-2" [routerLink]="['edit', user.id]">
                  Edit
                </button>
                <button class="btn btn-sm btn-danger" (click)="deleteUser(user.id)">
                  Delete
                </button>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="3" class="text-center">No users found</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class UsersComponent {
  userService = inject(UserService);
  users = toSignal(this.userService.getAll(), { initialValue: [] });

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.delete(id).subscribe(() => {
        // Refresh the users list
        this.users = toSignal(this.userService.getAll(), { initialValue: [] });
      });
    }
  }
}