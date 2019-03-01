import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserResult } from '../models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://api.fullcontact.com/v3/person.enrich';
  private username = "kalebhuddleston";
  constructor(private http: HttpClient) { }
  getUserSocialData(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = { twitter: this.username };
    return this.http
      .post<UserResult>(
      `${this.API_BASE_URL}`,
      body,
      httpOptions
      )
      .pipe(map(result => result));
  }
}