import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[]=[];
  carDetail:CarDetail;
  carFilterText:string="";
  colorFilterText:string="";
  brandFilterText:string="";
  defaultCarImage:CarImage;
  readonly imageDefaultPath="https://localhost:44397/uploads/images/"
  myCarImage:string="";
  dataLoaded=false;
  isFiltered=false;
  constructor(private carService:CarService,private carImageService:CarImageService,private activatedRoute:ActivatedRoute,public router:Router) { }

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
        this.getCarDetails();
      }
    })}

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }  
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrands(brandId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;      
    })}

  getCarsByColor(colorId:number){
    this.carService.getCarsByColors(colorId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }  

}
