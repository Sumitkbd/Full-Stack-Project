import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data!: any;

  constructor(private auth: UserService, private router:Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
   this.auth.getProfile().subscribe((res: any) =>{
 //  console.log(JSON.stringify(res))
    if(res.success){
   this.data = res.data;
  
 // console.log(this.data);
    }else{
        this.logout();
    }
  },err =>{
   })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  
}
