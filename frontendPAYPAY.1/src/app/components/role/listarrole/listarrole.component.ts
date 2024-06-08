import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/role';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-listarrole',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarrole.component.html',
  styleUrl: './listarrole.component.css'
})
  
export class ListarroleComponent implements OnInit{
  displayedColumns: string[] = ['idRole', 'nameRole', 'usuario'];

  dataSource: MatTableDataSource<Role> = new MatTableDataSource();

  constructor(private rS: RoleService) { }
  
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
