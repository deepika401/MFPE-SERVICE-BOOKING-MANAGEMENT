import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {

  id: any;
  data: any;

  constructor(private route: ActivatedRoute,private service:SharedService ) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getreport(); 
  }

  getreport(){
    this.service.getReportList(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}