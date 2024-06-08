import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Typeservice } from '../../../models/typeservice';
import { TypeserviceService } from '../../../services/typeservice.service';


@Component({
  selector: 'app-listartypeservice',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listartypeservice.component.html',
  styleUrl: './listartypeservice.component.css'
})
  
export class ListartypeserviceComponent implements OnInit {
  displayedColumns: string[] = [
    'idTypeService', 'nameTypeService'];
  dataSource: MatTableDataSource<Typeservice> = new MatTableDataSource();
  constructor(private tsS: TypeserviceService) {}

  ngOnInit(): void {
    this.tsS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tsS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}

