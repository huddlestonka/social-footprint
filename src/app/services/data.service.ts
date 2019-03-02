import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User, UserResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = environment.apiBaseUrl;
  private AUTH_TOKEN = environment.authToken;

  constructor(private http: HttpClient) {}
  getUserSocialData(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.AUTH_TOKEN}` 
      })
    };
    const body = { twitter: 'kalebhuddleston' };
    return this.http
      .post<UserResult>(`${this.API_BASE_URL}`, body, httpOptions)
      .pipe(map(userResult => {
        return this.getUserFromUserResult(userResult);
      }));
  }

  private getUserFromUserResult(userResult: UserResult): User {
    return {
      ageRange: userResult.ageRange,
      avatar: userResult.avatar,
      bio: userResult.bio,
      facebook: userResult.facebook,
      fullName: userResult.fullName,
      gender: userResult.gender,
      linkedin: userResult.linkedin,
      location: userResult.location,
      organization: userResult.organization,
      title: userResult.title,
      twitter: userResult.twitter,
      website: userResult.website
    };
  }
}
