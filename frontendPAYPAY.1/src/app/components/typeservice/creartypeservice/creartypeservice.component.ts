import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Typeservice } from '../../../models/typeservice';
import { Router } from '@angular/router';
import { TypeserviceService } from '../../../services/typeservice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-creartypeservice',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule],
  templateUrl: './creartypeservice.component.html',
  styleUrl: './creartypeservice.component.css'
})
export class CreartypeserviceComponent {
  form: FormGroup = new FormGroup({});
  ts: Typeservice = new Typeservice();
  tipos: { value: string; viewValue: string }[] = [
    { value: 'luz', viewValue: 'luz' },
    { value: 'agua', viewValue: 'agua' },
    { value: 'internet', viewValue: 'internet' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private tsS: TypeserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameTypeService: ['', Validators.required],
      idService: ['', Validators.required],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.ts.nameTypeService = this.form.value.nameTypeService;
      this.ts.idService = this.form.value.idservicio;
      this.tsS.insert(this.ts).subscribe((data) => {
        this.tsS.list().subscribe((data) => {
          this.tsS.setList(data);
        });
      });
      this.router.navigate(['listartypeservice']);
    }
  }
}
