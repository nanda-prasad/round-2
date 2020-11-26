import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GodbtechserviceService } from 'src/app/godbtechservice.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  notValidPassword: boolean = false;
  validEmail: boolean = false;
  constructor(private fb: FormBuilder, private service: GodbtechserviceService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.registerForm = this.fb.group({
      first_name : ['',Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls};

  submitRegister(data){
    this.submitted = true;
    if(this.registerForm.invalid){
      this.notValidPassword = true;
      return
    } else if (data.password != data.confirmpassword){
      this.notValidPassword = true;
      return;
    }
    else{
      let obj = data;
      this.service.postUser(obj).subscribe(res=>{
        debugger
      })
    }
  }
  numberType(event: any){
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
emailtype(event: any){
  let email2:any = '';
  email2 = this.registerForm.value.email;
  let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (pattern.test(email2) == false){
    this.validEmail = true;
  }
  if (pattern.test(email2) == true){
    this.validEmail = false;
  }
}
}
