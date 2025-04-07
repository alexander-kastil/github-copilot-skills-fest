import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + 'users';

  getAll() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  create(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  update(id: string, user: User) {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
