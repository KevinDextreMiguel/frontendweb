import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from '../user/user.component';
import { VoucherComponent } from '../voucher/voucher.component';
import { TypeserviceComponent } from '../typeservice/typeservice.component';
import { ServicesComponent } from '../services/services.component';
import { RoleComponent } from '../role/role.component';
import { NotificationComponent } from '../notification/notification.component';
import { MovementComponent } from '../movement/movement.component';
import { BankingentityComponent } from '../bankingentity/bankingentity.component';
import { AccountbankingComponent } from '../accountbanking/accountbanking.component';
import { ListarroleComponent } from '../role/listarrole/listarrole.component';
@Component({
  selector: 'app-navegar',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
//components
    UserComponent,
    VoucherComponent,
    TypeserviceComponent,
    ServicesComponent,
    RoleComponent,
    NotificationComponent,
    MovementComponent,
    BankingentityComponent,
    AccountbankingComponent,
  ],
  templateUrl: './navegar.component.html',
  styleUrl: './navegar.component.css'
})
export class NavegarComponent {

}
