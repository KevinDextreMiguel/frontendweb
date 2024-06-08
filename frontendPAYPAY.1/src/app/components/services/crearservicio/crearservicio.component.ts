import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Services } from '../../../models/services';
import moment from 'moment';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-crearservicio',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
   
  ],
  templateUrl: './crearservicio.component.html',
  styleUrl: './crearservicio.component.css'
})
export class CrearservicioComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  s: Services = new Services();
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(
    private formBuilder: FormBuilder,
    private sS: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameService: ['', Validators.required],
      descriptionService: ['', Validators.required],
      dateService: ['', Validators.required],
      timeService: ['', Validators.required],
      idUser: ['', Validators.required],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.s.nameService = this.form.value.nameService;
      this.s.descriptionService = this.form.value.descriptionService;
      this.s.dateService = this.form.value.dateService;
      this.s.timeService = this.form.value.timeService;
      this.s.idUser = this.form.value.idUser;
      this.sS.insert(this.s).subscribe((data) => {
        this.sS.list().subscribe((data) => {
          this.sS.setList(data);
        });
      });
      this.router.navigate(['listarservicio']);
    }
  }
}
