import { Component, OnInit } from '@angular/core';
import {  MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Movement } from '../../../models/movement';
import { MovementService } from '../../../services/movement.service';

@Component({
  selector: 'app-listarmovement',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarmovement.component.html',
  styleUrl: './listarmovement.component.css'
})
export class ListarmovementComponent implements OnInit{
  //definir las columnas de la tabla
  displayedColumns: string[] = [
    'codigo',
    'fecha',
    'tipo',
    'cantidad',
    'numero'
  ];

  dataSource: MatTableDataSource<Movement> = new MatTableDataSource();

  constructor(private mS: MovementService) { }

  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
