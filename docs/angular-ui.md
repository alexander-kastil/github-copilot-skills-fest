# Task 3: Implement the Angular Frontend

## Home Component

- The home page will be implemented in the `src/octofit-ui/src/app/home` folder and will be available in the root path. The home page will display a welcome message and a centered image of the OctoFit logo. The image will be stored in the `src/octofit-ui/src/public` folder. The home page will be styled using Bootstrap and will be responsive.

## Artifacts Scaffolding

For each .net model, create a corresponding Angular client side model. Match the properties exactly using camelCase. Initialize each property. Example:

src/octofit-ui/src/app/user/user.model.ts

The Api will have two components for each model, each model having its on folder. There will be a base component that will display the data in a table and a edit component. Example:

src/octofit-ui/src/app/user/user.component.ts
src/octofit-ui/src/app/user/user-edit.component.ts

Each component will use a service that will use the Angular httpClient. Example: src/octofit-ui/src/app/user/user.service.ts

Each service will have the following methods:

- `getAll` - Get all records of the model
- `getById` - Get a record by id
- `create` - Create a new record
- `update` - Update an existing record
- `delete` - Delete a record by id

### List Component

- The container component will display the data in a simple bootstrap striped table.

- The data from the service will be converted to a Signal using the toSignal function from the `@angular/core/rxjs-interop` package. The table displays the properties of the model and will have a button to edit the record. The button will navigate to the edit component using the routerLink directive.

- When creating a new record, pass a 0 id to the edit component. The edit component will create a new record and navigate back to the container component.

- To not create loading indicators, or extended error handling.

### Edit Component

- The edit component will display a form with the properties of the model. The form will be implemented using the Reactive Forms module. The form will have a submit button that will call the create or update method of the service depending on the mode (create or edit). The form will be validated using Angular's built-in validators. Use the exact property name for the form controls.

- To get the value of the form use Component Input Binding: Here is an example of how to implement the UserEditComponent. The user will also available available as a signal as we are using declarative binding. As the user id is a signal, we use an effect to load the user data when the id changes.

Example:

```typescript
export class UserEditComponent {
  id = input<number>();
  service = inject(UserService);
  user = new User();

  userForm = this.fb.group({
    id: [this.user().id, Validators.required],
    userName: [this.user().userName, Validators.required],
    email: [this.user().email, [Validators.required, Validators.email]],
    password: [this.user().password, Validators.required],
    birthDate: [this.user().birthDate]
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

- Do not create loading indicators, or extended error handling.

## Routing

Implement routes for the list component and the edit component in app.routes.ts. The route for the list container should be the same as the model name. The route for the edit component should be the same as the model name with `/edit` suffix and an id parameter. Example: `/user` and `/user/edit/:id`.

Use Component Input Binding in app.routes.ts:

```typescript
provideRouter(routes, withComponentInputBinding()),
```

### Navbar Component

- The navbar component will be implemented using the Angular CLI. The navbar will have links to all the list components. The navbar will be implemented in the app component and will be displayed on all pages and styled using Bootstrap.
