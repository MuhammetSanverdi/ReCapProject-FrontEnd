import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl='https://localhost:44397/api/';

  constructor(private httpClient:HttpClient) {

   }

   getDefaultCarImageByCarId(carId:number):Observable<ObjectResponseModel<CarImage>>{
    let newPath=this.apiUrl+"CarImages/getdefaultcarimagebycarid?carId="+carId;
    return this.httpClient.get<ObjectResponseModel<CarImage>>(newPath);
   }

}
