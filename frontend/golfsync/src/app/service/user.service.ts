import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'http://localhost:3000/api/users';

  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private http: HttpClient) {
    const userJson = sessionStorage.getItem('user');
    this.userSubject = new BehaviorSubject<any>(userJson ? JSON.parse(userJson) : null);
    this.user = this.userSubject.asObservable();
  }

  registerUser(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.uri}/register`, { username, email, password }).pipe(
      tap(response => {
        sessionStorage.setItem('user', JSON.stringify(response.user));
        sessionStorage.setItem('token', response.token);
        this.userSubject.next(response.user);
      }),
      catchError(this.handleError)
    );
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.uri}/login`, { email, password }).pipe(
      tap(response => {
        sessionStorage.setItem('user', JSON.stringify(response.user));
        sessionStorage.setItem('token', response.token);
        this.userSubject.next(response.user);
      }),
      catchError(this.handleError)
    );
  }

  get isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  get currentUser(): any {
    return this.userSubject.value;
  }

  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.userSubject.next(null);
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
