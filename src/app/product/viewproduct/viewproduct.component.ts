import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  id: any;
  data: any;

  constructor(private route: ActivatedRoute,private service:SharedService ) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getone(); 
  }

  getone(){
    this.service.getOneProduct(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }
}
