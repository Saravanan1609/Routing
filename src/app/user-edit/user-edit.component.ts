import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup,Validators } from "@angular/forms";
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userFormData:any;
  isPosting : boolean = false;
  currentUserId:any;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService, private router:Router) { 
    this.currentUserId=this.activatedRoute.snapshot.params['id'] 
    this.userFormData = new FormGroup ({
    'username' : new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'email' : new FormControl("",[Validators.required,Validators.email]),
    'phone' : new FormControl("",[Validators.required,Validators.min(9999999),Validators.max(9999999999)]),
    'countryCode' : new FormControl(""),
    'country' : new FormControl(),
    'state' : new FormControl(),
    'city' : new FormControl(),          
})
this.userService.userById(this.currentUserId).subscribe((data)=>{
  delete data.id; 
  this.userFormData.setValue(data);
})
}

  ngOnInit(): void {
  }

  editFormData(){
    if(this.userFormData.valid){
      this.userService.updateUserById(this.currentUserId,this.userFormData.value).subscribe((data) =>{
      this.router.navigate(['/dashboard/user/list/'])
      })
    }
  }
 
}