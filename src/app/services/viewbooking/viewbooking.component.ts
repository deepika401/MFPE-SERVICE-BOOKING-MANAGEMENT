import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {
   id: any;
  data: any;

  constructor(private route: ActivatedRoute,private service:SharedService ) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getone(); 
  }

  getone(){
    this.service.getServiceBookedList(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
