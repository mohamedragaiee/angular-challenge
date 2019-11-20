import { Component, OnInit, ViewChild } from '@angular/core';
import { Grid } from '@app/_models/grid';
import { GridService } from '@app/_services/grid.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  dataSource:any;
  displayedColumns: string[] = ['id', 'title', 'image'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  loading = true;


  constructor(private gridService:GridService) { }

  ngOnInit() {
    this.getGridData();
  }

  // get all grid data to view it with paginator and sorting
  // input : no 
  // author : Mohamed Ragaie
  getGridData(){
    this.gridService.getGridData().subscribe((res:Grid[])=>{
      this.loading = false;
      this.dataSource = new MatTableDataSource<Grid>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  // filtering data in grid 
  // input : filterValue 
  // author : mohamed Ragaie
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
