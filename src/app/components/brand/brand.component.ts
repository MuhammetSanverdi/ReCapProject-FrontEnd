import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] =[];
  constructor(private brandservice:BrandService) { }
  dataLoaded=false;

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.brandservice.getbrands().subscribe(response=>{
      this.brands=response.data;
      this.dataLoaded=true;
    
    })
  }

}
