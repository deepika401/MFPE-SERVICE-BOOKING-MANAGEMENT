import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  public products: any =[];
  
  constructor(private service:SharedService) { }

  ngOnInit() {
    this.service.getAllProducts()
    .subscribe(data => this.products =data);
    
  }

}
