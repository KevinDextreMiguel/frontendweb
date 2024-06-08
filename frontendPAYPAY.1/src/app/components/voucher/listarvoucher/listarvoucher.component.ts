import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Voucher } from '../../../models/voucher';
import { VoucherService } from '../../../services/voucher.service';

@Component({
  selector: 'app-listarvoucher',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarvoucher.component.html',
  styleUrl: './listarvoucher.component.css'
})
export class ListarvoucherComponent {
  displayedColumns: string[] = ['idVoucher', 'dateVoucher', 'hourVoucher','destinationAccountVoucher','amountVoucher','numberOperationVoucher','serviceB'];
  dataSource: MatTableDataSource<Voucher> = new MatTableDataSource();
  constructor(private vS: VoucherService) {}
  ngOnInit(): void {
    this.vS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.vS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
