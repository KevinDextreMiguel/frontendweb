import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarvoucherComponent } from './listarvoucher/listarvoucher.component';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [RouterOutlet,ListarvoucherComponent],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent implements OnInit{
  constructor(public route:ActivatedRoute) {}
 ngOnInit(): void {
     
 }
}
