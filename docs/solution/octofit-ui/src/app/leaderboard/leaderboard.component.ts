import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Leaderboard</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            @for (leader of leaders(); track leader.id) {
            <tr>
              <td>{{ $index + 1 }}</td>
              <td>{{ leader.username }}</td>
              <td>{{ leader.score }}</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class LeaderboardComponent {
  private leaderboardService = inject(LeaderboardService);
  leaders = toSignal(this.leaderboardService.getAll(), { initialValue: [] });
}
