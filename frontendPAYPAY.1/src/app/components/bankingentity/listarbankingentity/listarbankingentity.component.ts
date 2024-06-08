import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Bankingentity } from '../../../models/bankingentity';
import { BankingentityService } from '../../../services/bankingentity.service';

@Component({
  selector: 'app-listarbankingentity',
  standalone: true,
  imports: [MatTableModule],
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
     //'user'
    ];
     
  dataSource: MatTableDataSource<Bankingentity> = new MatTableDataSource();
  constructor(private bS: BankingentityService) {}
  ngOnInit(): void {
    this.bS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.bS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
