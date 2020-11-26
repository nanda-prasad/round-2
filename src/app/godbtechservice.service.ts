import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GodbtechserviceService {
  baseURL = environment.baseURL

  constructor(private http: HttpClient, private router: Router ) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error Occured : ', error.error.message);
    } else {
      console.error('Backend ERROR : ', error.error);
    }

    return throwError(error);
  }

  postHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return headers;
  }
  
  postUser(data){
    let url = `${this.baseURL}register`;
    let header = this.postHeaders();
    return this.http.post(url,data,{headers: header});
  }
  login(data){
    let url = `${this.baseURL}login`;
    let header = this.postHeaders();
    return this.http.post(url, data, { headers: header });
  }
  getUserData(){
    let url = `${this.baseURL}users?page=2`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  logout(){
    localStorage.removeItem('Token');
    this.router.navigate(['/login'])
  }
}
