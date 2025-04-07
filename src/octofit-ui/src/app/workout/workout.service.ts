import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + 'workouts';

  getAll() {
    return this.http.get<Workout[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Workout>(`${this.apiUrl}/${id}`);
  }

  create(workout: Workout) {
    return this.http.post<Workout>(this.apiUrl, workout);
  }

  update(id: string, workout: Workout) {
    return this.http.put<Workout>(`${this.apiUrl}/${id}`, workout);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
