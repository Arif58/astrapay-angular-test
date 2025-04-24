import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'http://localhost:7128/api/notes';

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(note:Note): Observable<any> {
    return this.httpClient.post(this.apiUrl, JSON.stringify(note), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = error.error.message;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
