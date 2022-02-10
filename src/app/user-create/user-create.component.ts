import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from "@angular/forms"
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userFormData:any;
  constructor() { 
    this.userFormData = new FormGroup({
      'username' : new FormControl("", Validators.required),
      'Email' : new FormControl(""),
      'Phone' : new FormControl(""),
      'Country' : new FormControl("IN"),
      'State' : new FormControl("TN"),
      'City': new FormControl("")
    })
  }

  ngOnInit(): void {
  }
 postFormData(){
   console.log(this.userFormData.value)
 }
}
