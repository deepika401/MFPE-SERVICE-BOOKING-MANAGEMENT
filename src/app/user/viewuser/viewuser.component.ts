import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  id: any;
  data: any;

  constructor(private route: ActivatedRoute,private service:SharedService ) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getUser(); 
  }

  getUser(){
    this.service.getOneUser(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }
}
