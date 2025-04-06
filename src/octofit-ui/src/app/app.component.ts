import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div class="container">
        <a class="navbar-brand" routerLink="/">OctoFit</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/workout" routerLinkActive="active"
            >Workouts</a
          >
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
