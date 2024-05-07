import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {
  data!: any[];
  newName!: string;
  newPhone!:string;
  newEmail!:string;
  newAge!: number;
  newAddress!:string;
//searchKey: any;
//users!: any[];
 showSearchResults: boolean = false;

searchKey: string = '';
  filteredData: any[] = [];

  constructor(
    private http: HttpClient,
   
  ) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(data => {
      this.data = data;
    });
  }


  
  searchUsers(): void {
    if (this.searchKey.trim() !== '') {
      this.filteredData = this.data.filter(user =>
        user.name.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchKey.toLowerCase())  ||   
      user.phone.includes(this.searchKey)     
    );
     this.showSearchResults = true;
    } else {
      this.filteredData = [];
      this.showSearchResults = false;
    }

  }

 

}
