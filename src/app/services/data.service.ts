import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserResult } from '../models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://api.fullcontact.com/v3/person.enrich';
  constructor(private http: HttpClient) { }
  getJokes(): Observable<User> {
    return this.http
      .get<UserResult>(
      `${this.API_BASE_URL}`
      )
      .pipe(map(result => result));
  }
}