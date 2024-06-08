import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Accountbanking } from '../../../models/accountbanking';
import moment from 'moment';
import { AccountbankingService } from '../../../services/accountbanking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearaccountbanking',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule],
  templateUrl: './crearaccountbanking.component.html',
  styleUrl: './crearaccountbanking.component.css'
})
export class CrearaccountbankingComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  a: Accountbanking = new Accountbanking();
  maxFecha: Date = moment().add(-1, 'days').toDate();

  tipos: { value: string; viewValue: string }[] = [
    { value: 'Formal', viewValue: 'Formal' },
    { value: 'Deportivo', viewValue: 'Deportivo' },
    { value: 'Casual', viewValue: 'Casual' },
  ];
 
  constructor(
    private formBuilder: FormBuilder,
    private aS: AccountbankingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typeAccountBanking: ['', Validators.required],
      amountAccountBanking: ['', Validators.required],
      dateOpening: ['', Validators.required],
      //entityBank: ['', Validators.required],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.a.typeAccountBanking = this.form.value.typeAccountBanking;
      this.a.amountAccountBanking = this.form.value.amountAccountBanking;
      this.a.dateOpening = this.form.value.dateOpening;
     // this.a.entityBank = this.form.value.entityBank;
      this.aS.insert(this.a).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
      this.router.navigate(['listaraccountbanking']);
    }
  }
}
