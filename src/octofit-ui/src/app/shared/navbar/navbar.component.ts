import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">OctoFit</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/users">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/activities">Activities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/leaderboards">Leaderboards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/workouts">Workouts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 56px;
      }
    `,
  ],
})
export class NavbarComponent {}
