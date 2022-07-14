import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  UsersList:any=[];

  constructor(private service:SharedService) { }
  
  ngOnInit() {
    this.service.getAllUsers()
    .subscribe(data => this.UsersList =data);

  }

  delete(id:any){
    if(confirm('Are you sure you want to delete this??')){
      this.service.deleteUser(id).subscribe(res=>this.UsersList=res);
    }

  }
}
