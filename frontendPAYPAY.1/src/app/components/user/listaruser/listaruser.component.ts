import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../../models/user';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaruser.component.html',
  styleUrl: './listaruser.component.css'
})
  
  
export class ListaruserComponent implements OnInit{
  //definir las columnas de la tabla
  displayedColumns: string[] = [
    'idUser',
    'nameUser',
    'lastnameUser',
    'ageUser',
    'cityUser',
    'cellphoneUser',
    'gmailUser',
    /*
    'password',
    'enable'*/
  ];


  dataSource: MatTableDataSource<User> = new MatTableDataSource();


  constructor(private uS: UserService) { }
  
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
