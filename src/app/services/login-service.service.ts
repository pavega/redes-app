import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';


const authEndpoint = 'http://140.84.168.70:8097/api/auth';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(loginRequest: any){
    return this.http.post(authEndpoint+'/login',loginRequest,httpOptions).pipe(
      tap((response: any) => {
        httpOptions.headers = httpOptions.headers.set('Authorization', " Bearer "+ response.jwtToken);
      })
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
