import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[] =[];
  constructor(private rentalService:RentalService) { }
  dataLoaded=false;

  ngOnInit(): void {
    this.getRentalDetails();
  }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    
    })
}}
