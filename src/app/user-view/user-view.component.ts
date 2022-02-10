import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  currentUserId:string = "";
  isLoading:boolean = true;
  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((data) => {
      this.currentUserId = data['id'];
    })
  }

  ngOnInit(): void {
  }

}