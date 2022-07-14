import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-allreports',
  templateUrl: './allreports.component.html',
  styleUrls: ['./allreports.component.css']
})
export class AllreportsComponent implements OnInit {
  
  ReportList:any=[];

  constructor(private service:SharedService) { }
  
  ngOnInit() {
    this.service.getAllServiceReportsList()
    .subscribe(data => this.ReportList =data);

  }
}
