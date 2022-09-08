import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[]=[];
  dataLoaded=false;
  isFiltered=false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params['brandId']){
        this.isFiltered=true;
        this.getCarsByBrand(params['brandId'])        
      }
      else if(params['colorId']){
        this.isFiltered=true;
        this.getCarsByColor(params['colorId']);
      }
      else{
        this.getRentalDetails();
      }
    }) 
  }

  getRentalDetails(){
    this.carService.getRentalDetails().subscribe(response=>{
      this.carDetails=response.data,
      this.dataLoaded=true
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrands(brandId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColors(colorId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }

}
