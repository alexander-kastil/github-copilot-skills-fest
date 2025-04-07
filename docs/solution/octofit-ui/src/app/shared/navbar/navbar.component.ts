import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
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
              <a
                class="nav-link"
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/users" routerLinkActive="active"
                >Users</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/activities"
                routerLinkActive="active"
                >Activities</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/leaderboards"
                routerLinkActive="active"
                >Leaderboards</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/workouts"
                routerLinkActive="active"
                >Workouts</a
              >
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
