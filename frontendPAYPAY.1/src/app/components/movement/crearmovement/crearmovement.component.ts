import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movement } from '../../../models/movement';
import moment from 'moment';
import { MovementService } from '../../../services/movement.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-crearmovement',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './crearmovement.component.html',
  styleUrl: './crearmovement.component.css'
})
export class CrearmovementComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  m: Movement = new Movement();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(
    private formBuilder: FormBuilder,
    private mS: MovementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateMovement: ['', Validators.required],
      typeMovement: ['', Validators.required],
      amountMovement: ['', Validators.required],
      numberAccountBanking: ['', Validators.required],
    });
  }
  
  registrar(): void {
    if (this.form.valid) {
      this.m.dateMovement = this.form.value.dateMovement;
      this.m.typeMovement = this.form.value.typeMovement;
      this.m.amountMovement = this.form.value.amountMovement;
      this.m.numberAccountBanking = this.form.value.numberAccountBanking;
      this.mS.insert(this.m).subscribe((data) => {
        this.mS.list().subscribe((data) => {
          this.mS.setList(data);
        });
      });
      this.router.navigate(['listarmovement']);
    }
  }
}
