import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bankingentity } from '../../../models/bankingentity';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BankingentityService } from '../../../services/bankingentity.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crearbankingentity',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule],
  templateUrl: './crearbankingentity.component.html',
  styleUrl: './crearbankingentity.component.css'
})
export class CrearbankingentityComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  b: Bankingentity = new Bankingentity();
  id!: number;

  nombres: { value: string; viewValue: string }[] = [
    { value: 'Banco de la Nacion', viewValue: 'Banco de la Nacion' },
    { value: 'BCP', viewValue: 'BCP' },
    { value: 'BBVA', viewValue: 'BBVA' },
    { value: 'Interbank', viewValue: 'Interbank' },
    { value: 'Scotiabank', viewValue: 'Scotiabank' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private bS: BankingentityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.form = this.formBuilder.group({
      nameBankingEntity: ['', Validators.required],
      descriptionBankingEntity: ['', Validators.required],
      addressBankingEntity: ['', Validators.required],
      cellphoneBankingEntity: ['', Validators.required],
      websiteBankingEntity: ['', Validators.required],
      headquarterBankingEntity: ['', Validators.required],
      //user: ['', [Validators.required]],
    });
    if(this.id){
      this.bS.getById(this.id).subscribe((data: Bankingentity)=>{
        this.form.patchValue(data);
      })
    }
  }
  onSubmit(): void {
    //login
    //auth.login(username, password).suscribe((data)=> {
    // localStorge.setItem('token', token);
    // localStorge.setItem('idUser', data.idUser;});

    if (this.form.valid) {
      this.b.nameBankingEntity = this.form.value.nameBankingEntity;
      this.b.descriptionBankingEntity = this.form.value.descriptionBankingEntity;
      this.b.addressBankingEntity = this.form.value.addressBankingEntity;
      this.b.cellphoneBankingEntity = this.form.value.cellphoneBankingEntity;
      this.b.websiteBankingEntity = this.form.value.websiteBankingEntity;
      this.b.headquarterBankingEntity=this.form.value.headquarterBankingEntity,
      this.b.user.idUser = parseInt(localStorage.getItem('idUser') || '0');
      if(this.id){
        this.b.idBankingEntity = this.id;
        this.bS.update(this.b).subscribe(() => {
          this.bS.list().subscribe((data) => {
            this.bS.setList(data);
          });
        })
      }else{
        this.bS.insert(this.b).subscribe((data) => {
          this.bS.list().subscribe((data) => {
            this.bS.setList(data);
          });
        });
      }
      this.router.navigate(['listarbankingentity']);
    }
  }
}
