import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grid } from '@app/_models/grid';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http:HttpClient) { }
  // function to fetch grid data from api 
  // author : Mohamed Ragaie
  getGridData(){
   return this.http.get<Grid[]>('https://jsonplaceholder.typicode.com/photos/');
  }
}
