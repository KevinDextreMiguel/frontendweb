import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavegarComponent } from './components/navegar/navegar.component';
import { SobrenosotrosComponent } from './views/sobrenosotros/sobrenosotros.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobrenosotrosComponent,
    NavegarComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router: Router) { }
  title = 'frontend';
}
