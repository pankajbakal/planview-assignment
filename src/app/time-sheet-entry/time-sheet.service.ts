import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITimesheet } from './timesheet.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {
  private url = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public createTimesheet(timesheet: ITimesheet) {
    return this.http.post<ITimesheet>(this.url + '/timesheet', JSON.stringify(timesheet), this.httpOptions)
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
