import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
currentUserId:string = "";
userData:UserData | any = {};
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { 
    this.activatedRoute.params.subscribe((data)=>{
      this.currentUserId = data['id'];
      this.userService.userById(this.currentUserId).subscribe((data) => {
        this.userData =data;    
      });
    })
  }

  ngOnInit(): void {
    
  }

}
