import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-registraruser',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl:'./registraruser.component.html',
  styleUrl: './registraruser.component.css'
})
  
  
  
export class RegistraruserComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  u: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private uS: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameUser: ['', Validators.required],
      lastnameUser: ['', Validators.required],
      ageUser: ['', Validators.required],
      cityUser: ['', Validators.required],

      cellphoneUser: ['', Validators.required],
      gmailUser: ['', Validators.required],
      password: ['', Validators.required],
      enabled: ['', Validators.required],
    });
  }



  registrar(): void {
    if (this.form.valid) {
      this.u.nameUser = this.form.value.nameUser;
      this.u.lastnameUser = this.form.value.lastnameUser;
      this.u.ageUser = this.form.value.ageUser;
      this.u.cityUser = this.form.value.cityUser;
      this.u.cellphoneUser = this.form.value.cellphoneUser;

      this.u.gmailUser = this.form.value.gmailUser;
      this.u.password = this.form.value.password;
      this.u.enabled = this.form.value.enabled;

      this.uS.insert(this.u).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
      this.router.navigate(['listaruser']);
    }
  }
}
