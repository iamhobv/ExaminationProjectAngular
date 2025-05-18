import { HttpClientModule } from '@angular/common/http';
import { ILogin } from './../../Models/ilogin';
import { LoginService } from './../../Services/login-servicee.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent   {





loginForm = new FormGroup({
  username:new FormControl("",[Validators.required,Validators.minLength(3)]),
  password:new FormControl("",[Validators.required,Validators.minLength(8)]),
})
/**
 *
 */
constructor( private loginService:LoginService ) {

  
}
  

get getUsername() {
    return this.loginForm.controls['username'];
  }
get getPassword() {
    return this.loginForm.controls['password'];
  }
mb20px:boolean = true;
error:boolean = false;

LoginSubmit(){
if(this.loginForm.status=="VALID"){

  console.log("clicked");
  // Login:ILogin ={username:"",password:""}; 
  const loginCred = {username:"",password:""} as ILogin; 
  loginCred.username = this.loginForm.value.username ?? "";
  loginCred.password = this.loginForm.value.password ?? "";

  this.loginService.login().subscribe({
    next:()=>{
      console.log("logged in ");
    },
    error:()=>{
      console.log("error");
    }
  })
  
}else{
  
  console.log("Error");
  this.error=true;
}

}



}