# Implement the Users List and Edit Component

1. In the octofit-ui/src/app/user folder, create a UsersComponent. This component will be used to display the user data in a striped table format. It should have the columns: UserName, Email, BirthDate.

2. The table should have a button to edit the user which will navigate to the edit component by passing the id of the user as a parameter. When creating a new user, pass a id "0" to the edit component. The table should also have a delete button that uses the id of the row to delete the user using the service.

3. Configure component input binding app.config.ts but leave the rest of app.config.ts as it is. Example:

```typescript
provideRouter(routes, withComponentInputBinding()),
```

4. In the UserEditComponent the id signal will be used to get the user data from the service. The id will be passed as a parameter to the edit component using an :id parameter. Angular 19+ will handle this change in the userUpdate effect which is a modern replacement for ngOnChanges. The effect get the user data from the service and patch the form with the data. When implementing the Reactive Form, check the corresponding Type in the .NET WebApi and use exactly the property names received from the Api in json, otherwise create and update will fail as the formControlNames will shape the json. If there is a conflict correct it. Stick to this pattern.

```typescript
export class UserEditComponent {
  id = input<number>();
  service = inject(UserService);
  user = new User();

  userForm = this.fb.group({
    id: [this.user().id, Validators.required],
    username: [this.user().userName, Validators.required],
    email: [this.user().email, [Validators.required, Validators.email]],
    password: [this.user().password, Validators.required],
  });

  userUpdate = effect(() => {
    if (this.id()) {
      this.service.getById(this.id()).subscribe((user) => {
        this.userForm.patchValue(user);
      });
    }
  });
}
```

5. Implement routing and navigation. Example: `/user` and `/user/edit/:id`.

6. Before starting the implementation, share your plan. Keep the order of the tasks. Do not implement anything that you are not asked for. Don't proceed with the next activity until all of these steps are completed.
