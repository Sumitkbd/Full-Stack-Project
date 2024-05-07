import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  data!: any[];
  newName!: string;
  newPhone!:string;
  newEmail!:string;
  newAge!: number;
  newAddress!: string;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router:Router

  ) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(data => {
      this.data = data;
    });
  }
  updateData(id: number, newName:string, newPhone:string, newEmail:string, newAge:number, newAddress:string): void {
    const newData = { name: newName, phone:newPhone, email:newEmail, age: newAge, address:newAddress };
    this.http.put<any>(`http://localhost:3000/api/user/${id}`, newData).subscribe(updatedData => {
      console.log('Data updated:', updatedData);
       // window.location.reload(); // Refresh the page after data update
    });
  }

  selectedItemId: any; // property to store selected item id
  populateForm(item: any): void {
    // Assign item values to form fields
    this.selectedItemId = item._id;
    this.newName = item.name;
    this.newPhone = item.phone;
    this.newEmail = item.email;
    this.newAge = item.age;
    this.newAddress = item.address;
  }


  // For delete data
  deleteUser(id: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        console.log('User deleted successfully');
        this.data = this.data.filter(item => item._id !== id);
      });
    }
  }


  // when click close button
  refresh(){
    window.location.reload(); // Refresh the page after data update
  }
  


}

