import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Notification } from '../../../models/notification';
import { NotificationService } from '../../../services/notification.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crearnotification',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './crearnotification.component.html',
  styleUrl: './crearnotification.component.css'
})
export class CrearnotificationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  n: Notification=new Notification();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(
    private formBuilder: FormBuilder,
    private nS: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      messageNotification: ['', Validators.required],
      dateShipNotification: ['',[Validators.required,]],
      stateNotification: ['', Validators.required],
    //  movement: ['',[Validators.required]],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.n.messageNotification = this.form.value.messageNotification;
      this.n.dateShipNotification = this.form.value.dateShipNotification;
      this.n.stateNotification = this.form.value.stateNotification;
    //  this.n.movement = this.form.value.movement;
      this.nS.insert(this.n).subscribe((data) => {
        this.nS.list().subscribe((data) => {
          this.nS.setList(data);
        });
      });
      this.router.navigate(['listarnotification']);
    }
  }
}
