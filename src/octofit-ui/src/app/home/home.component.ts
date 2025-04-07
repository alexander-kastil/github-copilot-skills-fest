import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container text-center mt-5">
      <h1>Welcome to OctoFit</h1>
      <p class="lead mt-3">Track your fitness journey with OctoFit</p>
      <img
        src="assets/octofit-logo.png"
        alt="OctoFit Logo"
        class="img-fluid mt-4"
        style="max-width: 300px;"
      />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 20px;
      }
    `,
  ],
})
export class HomeComponent {}
