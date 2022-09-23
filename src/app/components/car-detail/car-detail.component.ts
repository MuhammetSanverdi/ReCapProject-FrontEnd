import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:CarDetail;
  dataLoaded=false;
  isFiltered=false;
  readonly imageDefaultPath="https://localhost:44397/uploads/images/"

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if('carId'){
        this.isFiltered=true;
        this.getCarByCarDetail(params['carId']);
    }})}
  

  getCarByCarDetail(id:number){
    this.carService.getCarByCarDetail(id).subscribe(response=>{
      this.carDetail=response.data;
      this.dataLoaded=true;
    })
  }}
