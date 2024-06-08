import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Services } from '../../../models/services';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-listarservices',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarservices.component.html',
  styleUrl: './listarservices.component.css'
})
export class ListarservicesComponent implements OnInit{
  displayedColumns: string[] =
    ['idService', 
    'nameService', 
    'descriptionService',
     'dateService',
      'timeService', 
      'idUser'];
  dataSource: MatTableDataSource<Services> = new MatTableDataSource();

  constructor(private sS: ServicesService) { }
  
  ngOnInit(): void {
    this.sS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.sS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
