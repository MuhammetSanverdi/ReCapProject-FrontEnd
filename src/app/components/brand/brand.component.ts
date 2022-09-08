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
  currentBrand:Brand;
  readonly defaultCurrentBrand:Brand;
  constructor(private brandservice:BrandService) { }
  dataLoaded=false;

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandservice.getBrands().subscribe(response=>{
      this.brands=response.data;
      this.dataLoaded=true;
    
    })}
    setCurrentBrand(brand:Brand){

      this.currentBrand=brand;      
    }
    getCurrentBrandClass(brand:Brand){
      if(brand==this.currentBrand){
        return "list-group-item active"      
      }
      return "list-group-item"
    }
    getCurrentDefaultBrandClass(){
      if(this.currentBrand==null){
        return "list-group-item active"
      }
      return "list-group-item"
    }
    setCurrentDefaultBrand(){      
      this.currentBrand=this.defaultCurrentBrand;
    }


}
