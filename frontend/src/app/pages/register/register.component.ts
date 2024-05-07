import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  message!: string;
  isProcess!: boolean;
  className!: string;

  constructor(
    private fb: FormBuilder,
     private auth: UserService,
     private router: Router
    
    ) {
    // Initialize userForm with form controls and validators
    this.signupForm = this.fb.group({
      'displayName': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  signup() {
    this.isProcess = true;
    const data = this.signupForm.value; // Get form values
    delete data['comfirm']
    this.auth.signup(data).subscribe((res: any) => {

      if (res.success) {
        this.isProcess = false;
        this.message = "Account Has been Created Successfully";
        this.className = "alert alert-success";
      
      } else {
        this.isProcess = false;
        this.message = res.message;
        this.className = "alert alert-danger";
      }

     }, err => {
      this.isProcess = false;
      this.message = "Server Error !!!";
      this.className = "alert alert-danger";
    }
    );
  }

}
