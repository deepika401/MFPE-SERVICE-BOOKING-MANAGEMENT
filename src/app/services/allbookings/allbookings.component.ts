import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {

  
  public booking: any =[];
  
  constructor(private service:SharedService) { }

  ngOnInit() {
    this.service.getAllServiceBookingList()
    .subscribe(data => this.booking =data);
    
  }

}
