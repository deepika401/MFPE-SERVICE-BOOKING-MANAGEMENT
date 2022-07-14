import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {
  newbooking: any;
 

  
  constructor(private service:SharedService) { }
  
  data:any;

  ngOnInit(){
  
  }

  
  refreshbooking(){
    this.service.getAllServiceBookingList().subscribe(data=>{
      console.log(data);
      this.newbooking=data;
    })
      
  }
 getCreatedata(value:any)  {
    this.service.postbooking(value).subscribe(data=>
      {
       console.log(data);
    
      });
    
  }

}
