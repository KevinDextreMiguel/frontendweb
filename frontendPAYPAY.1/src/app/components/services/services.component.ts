import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarservicesComponent } from './listarservices/listarservices.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,ListarservicesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{

  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
      
  }
}
