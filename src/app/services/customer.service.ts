import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustopmerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44397/api/customers/getcustomerdetails";
  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<CustopmerResponseModel>{
    return this.httpClient.get<CustopmerResponseModel>(this.apiUrl);

  }}
