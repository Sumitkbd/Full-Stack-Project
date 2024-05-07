// add-user.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'; // Import the UserService

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup; // Declare userForm as a FormGroup

  constructor(private userService: UserService, private router: Router) {
    // Initialize userForm with form controls and validators
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'age': new FormControl(''),
      'address': new FormControl('')
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      // Proceed with adding user if form is valid
      const userData = this.userForm.value; // Get form values
      this.userService.addUser(userData); // Call the addUser method from the UserService
      console.log('User added successfully');
      this.message = 'User added successfully'; // Provide feedback to the user
      this.userForm.reset(); // Clear form fields after successful submission
    } else {
      // Handle invalid form submission
      console.log('Form is invalid');
    }
  }

  // This will clear all fields in the form
  clearForm() {
    this.userForm.reset();
  }

  /*
  // send on user-list page
  goToUserList(): void {
    this.router.navigate(['/users']);
  }
*/
  //Set the message when data added successfully in userlist
  message: string = ''; // Initialize message property
  displayMessage(): void {
    this.message = 'User added successfully'; // Set the message when button clicked
  }
}

