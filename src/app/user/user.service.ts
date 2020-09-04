import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  users: IUser[];

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + '/users')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public createUser(user: IUser) {
    return this.http.post<IUser>(this.url + '/users', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public getUserByID(id: number) {
    return this.http.get<IUser>(this.url + '/users/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public updateUser(id: number, user: IUser) {
    return this.http.put<IUser>(this.url + '/users/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      ).subscribe(response => response);
  }

  public deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(this.url + '/users/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public unblockUser(id: number, user: IUser) {
    return this.http.put<IUser>(this.url + '/users/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Something went wrong: ${err.error.message}`;
    } else {
      errorMessage = `Something went wrong: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
