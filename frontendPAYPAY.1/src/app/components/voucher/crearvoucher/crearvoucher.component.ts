import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Voucher } from '../../../models/voucher';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { VoucherService } from '../../../services/voucher.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-crearvoucher',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule],
  templateUrl: './crearvoucher.component.html',
  styleUrl: './crearvoucher.component.css'
})
export class CrearvoucherComponent {
  form: FormGroup = new FormGroup({});
  v: Voucher = new Voucher();
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(
    private formBuilder: FormBuilder,
    private vS: VoucherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateVoucher: ['', Validators.required],
      hourVoucher: ['', Validators.required],
      destinationAccountVoucher: ['',[Validators.required]],
      amountVoucher: ['',[Validators.required]],
      numberOperationVoucher: ['',[Validators.required]],
      serviceB: ['', Validators.required],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.v.dateVoucher = this.form.value.dateVoucher;
      this.v.hourVoucher = this.form.value.hourVoucher;
      this.v.destinationAccountVoucher = this.form.value.destinationAccountVoucher;
      this.v.amountVoucher = this.form.value.amountVoucher;
      this.v.numberOperationVoucher = this.form.value.numberOperationVoucher;
      this.v.serviceB = this.form.value.serviceB;
      this.vS.insert(this.v).subscribe((data) => {
        this.vS.list().subscribe((data) => {
          this.vS.setList(data);
        });
      });
      this.router.navigate(['listarvoucher']);
    }
  }
}
