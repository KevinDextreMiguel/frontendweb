import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Bankingentity } from '../../../models/bankingentity';
import { BankingentityService } from '../../../services/bankingentity.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SinodeletebankingentityComponent } from './sinodeletebankingentity/sinodeletebankingentity.component';
@Component({
  selector: 'app-listarbankingentity',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, SinodeletebankingentityComponent],
  templateUrl: './listarbankingentity.component.html',
  styleUrl: './listarbankingentity.component.css'
})
export class ListarbankingentityComponent implements OnInit{
  displayedColumns: string[] = [
    'idBankingEntity',
     'nameBankingEntity', 
     'descriptionBankingEntity',
     'addressBankingEntity',
     'cellphoneBankingEntity',
     'websiteBankingEntity',
     'headquarterBankingEntity',
     //'user',
     'edit',
     'delete'
    ];
     
  dataSource: MatTableDataSource<Bankingentity> = new MatTableDataSource();
  constructor(private bS: BankingentityService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.bS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.bS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

  deleteBanking(id: number): void {
    this.dialog.open(SinodeletebankingentityComponent, {width: '250px'}).afterClosed().subscribe((res) => {
      if(res){
        this.bS.eliminar(id).subscribe(()=> {
          this.bS.list().subscribe((data) => {
            this.bS.setList(data);
          });
        })
      }
    });
  }
}