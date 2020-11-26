import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { GodbtechserviceService } from 'src/app/godbtechservice.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  submitted: boolean = false;
  showToster: boolean = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private service: GodbtechserviceService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.loginFrom = this.fb.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginFrom.controls };
  login(data) {
    this.submitted = true;
    if (this.loginFrom.invalid) {
      return
    }
    this.service.login(data).subscribe(res=>{
      let token:any = res;
      localStorage.setItem('Token', token);
      this.showToster = true;
      setTimeout(() => {
        this.showToster = true;
      }, 3000);
      this.router.navigate(['/user/user'])
    });
  }
}
