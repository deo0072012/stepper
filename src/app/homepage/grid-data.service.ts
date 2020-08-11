import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor() { }

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true},
    {headerName: 'Rating', field: 'rating', sortable: true, filter: true },
    {headerName: 'Country', field: 'country', sortable: true, filter: true},
    {headerName: 'Year', field: 'year', sortable: true , filter: true},
    {headerName: 'Old', field: 'old', sortable: true , filter: true},
  ];

  rowDataS = [
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8}, 
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8}, 
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8}, 
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8}, 
    { make: 'Toyota', model: 'Celica', price: 35000, rating: 4.0, country: 'Japan', year: 1990, old: 10},
    { make: 'Ford', model: 'Mondeo', price: 32000, rating: 4.0, country: 'India', year: 1995, old: 12},
    { make: 'Porsche', model: 'Boxter', price: 72000,  rating: 4.3, country: 'Russia', year: 1996, old: 8},
  ];
  getcolumnDefs(){
    return this.columnDefs;
  }
  getrowData(){
    return this.rowDataS;
  }

}
