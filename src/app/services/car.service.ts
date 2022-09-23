import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import {  CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { SingleResponseModel } from '../models/getResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44397/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  
  getCarsByBrands(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColors(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }  
  getCarByCarDetail(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getcardetailbycarid?id="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
