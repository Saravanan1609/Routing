import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userFormData:any;
  currentUserId : any;
  isPosting:boolean = false
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService,private router:Router) {
    this.currentUserId = this.activatedRoute.snapshot.params['id'];

    this.userFormData = new FormGroup({
      'username' : new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      'email' : new FormControl("",[Validators.required,Validators.email]),
      'phone' : new FormControl("",[Validators.required,Validators.min(9999999),Validators.max(999999999)]),
      'countryCode' : new FormControl(""),
      'country' : new FormControl("IN"),
      'state' : new FormControl("TN"),
      'city' : new FormControl("CH"),
      'skills' : new FormArray([
        new FormGroup({
          'skillName' : new FormControl("",Validators.required),
          'ratting' : new FormControl()
        }),
        new FormGroup({
          'skillName' : new FormControl("",Validators.required),
          'ratting' : new FormControl()
        }),
        new FormGroup({
          'skillName' : new FormControl("",Validators.required),
          'ratting' : new FormControl()
        }),
        new FormGroup({
          'skillName' : new FormControl("",Validators.required),
          'ratting' : new FormControl()
        }),
      ])
    })

    this.userService.userById(this.currentUserId).subscribe((data) => {
      console.log(data)
      delete data.id;
      this.userFormData.setValue(data)
    })
    
  }

  ngOnInit(): void {
  }

  editFormData(){
    if(this.userFormData.valid){
      this.userService.updateUserById(this.currentUserId,this.userFormData.value).subscribe((data) => {
        this.router.navigate(['/dashboard/user/list'])
      })
    }
  }
}