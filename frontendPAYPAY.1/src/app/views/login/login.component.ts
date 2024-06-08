import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { NavegarComponent } from '../../components/navegar/navegar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    HeaderComponent,
    NavegarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //constructor(private authGoogleService: AuthGoogleService) { }
  
  //login() {
  //  this.authGoogleService.login();
  //}
}



