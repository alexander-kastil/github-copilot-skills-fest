import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + 'activities';

  getAll() {
    return this.http.get<Activity[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Activity>(`${this.apiUrl}/${id}`);
  }

  create(activity: Activity) {
    return this.http.post<Activity>(this.apiUrl, activity);
  }

  update(id: string, activity: Activity) {
    return this.http.put<Activity>(`${this.apiUrl}/${id}`, activity);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
