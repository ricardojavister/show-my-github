import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Repository } from '../interfaces/repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) { }

  public getUserName(userName: string): Observable<User> {
    return this.http.get<User>(this.BASE_URL + userName );
  }

  public getRepos(userName: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.BASE_URL + userName + '/repos');
  }
}
