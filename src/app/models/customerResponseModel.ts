import { Customer } from "./customer";
import { ResponseModel } from "./responseModel";

export interface CustopmerResponseModel extends ResponseModel{
    data:Customer[]
}