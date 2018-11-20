import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from '@app-core/models';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders } from '@angular/common/http';


const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class UsersService {

  constructor(private httpClient: HttpClient ) { }

  index(): Observable<User[]> {
    return this.httpClient
        .get<User[]>(`${environment.innoApi.baseUrl}`);

  }

  show(userId: number): Observable<User> {
    return this.httpClient
        .get<User>(`${environment.innoApi.baseUrl}/${userId}`);

  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(PROXY_URL + `${environment.innoApi.baseUrl}`, user, httpOptions)
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${environment.innoApi.baseUrl}`, user, httpOptions)
  }

  destroy(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${environment.innoApi.baseUrl}/${id}`);
  }

}
