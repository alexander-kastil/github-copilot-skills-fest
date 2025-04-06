import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl + 'workout';

  getAll() {
    return this.http.get<Workout[]>(this.baseUrl);
  }

  getById(id: string) {
    return this.http.get<Workout>(`${this.baseUrl}/${id}`);
  }

  create(workout: Workout) {
    return this.http.post<Workout>(this.baseUrl, workout);
  }

  update(workout: Workout) {
    return this.http.put<Workout>(`${this.baseUrl}/${workout.id}`, workout);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
