import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GodbtechserviceService } from './godbtechservice.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private service: GodbtechserviceService) { }

  login(data){
    let user;
    this.service.login(data).subscribe(res=>{
      user = res;
      if (user){
        console.log('login successfully')
      } 
    });
    return user
  }
}
