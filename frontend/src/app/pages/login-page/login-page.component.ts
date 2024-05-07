import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  message!: string ;

  constructor( 
    private fb: FormBuilder, 
     private auth: UserService,
     private router: Router
    ) {
    // Initialize userForm with form controls and validators
    this.loginForm = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('')
    });
  
  
  
  }
  ngOnInit(): void {}

  login() {
    const data = this.loginForm.value; // Get form values
    this.auth.signin(data).subscribe((res: any) => { 
      if(res.success){
        localStorage.setItem('token', res.token);
     this.router.navigate(['/profile']);
      }else{
        alert(res.message);
      }
  
    }, err => {
      alert("Login Failed");
    });
  }
  
}
