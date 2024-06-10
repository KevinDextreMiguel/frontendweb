import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../../models/user';
import { EliminaruserComponent } from './eliminaruser/eliminaruser.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [MatTableModule,EliminaruserComponent,MatButtonModule,MatFormFieldModule,RouterLink,MatPaginatorModule,MatInputModule,MatIconModule],
  templateUrl: './listaruser.component.html',
  styleUrl: './listaruser.component.css'
})
  
  
export class ListaruserComponent implements OnInit{
  //definir las columnas de la tabla
  displayedColumns: string[] = [
    'nameUser',
    'lastnameUser',
    'ageUser',
    'cityUser',
    'cellphoneUser',
    'gmailUser',
    'editar',
    'delete'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();


  constructor(private uS: UserService,public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    })
  }
  eliminaruser(id: number): void {
    this.dialog.open(EliminaruserComponent, {width: '250px'}).afterClosed().subscribe((res) => {
      if(res){
        this.uS.eliminar(id).subscribe(()=> {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        })
      }
    });
  }
}
