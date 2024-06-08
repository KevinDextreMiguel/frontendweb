import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AccountbankingService } from '../../../services/accountbanking.service';
import { Accountbanking } from '../../../models/accountbanking';

@Component({
  selector: 'app-listaraccountbanking',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaraccountbanking.component.html',
  styleUrl: './listaraccountbanking.component.css'
})
export class ListaraccountbankingComponent implements OnInit{
  displayedColumns: string[] = [
    'numberAccountBanking', 
    'typeAccountBanking',
   'amountAccountBanking',
  // 'entityBank'
];
  dataSource: MatTableDataSource<Accountbanking> = new MatTableDataSource();
  constructor(private aS: AccountbankingService) {}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
