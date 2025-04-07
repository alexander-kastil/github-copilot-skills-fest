import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Leaderboard } from './leaderboard';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + 'leaderboards';

  getAll() {
    return this.http.get<Leaderboard[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Leaderboard>(`${this.apiUrl}/${id}`);
  }

  create(leaderboard: Leaderboard) {
    return this.http.post<Leaderboard>(this.apiUrl, leaderboard);
  }

  update(id: string, leaderboard: Leaderboard) {
    return this.http.put<Leaderboard>(`${this.apiUrl}/${id}`, leaderboard);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
