import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-listarnotification',
  standalone: true,
  imports: [MatTableModule,MatIconModule],
  templateUrl: './listarnotification.component.html',
  styleUrl: './listarnotification.component.css'
})
export class ListarnotificationComponent implements OnInit{
  displayedColumns: string[] = [
    'idNotification', 
  'messageNotification', 
  'dateShipNotification',
  'stateNotification',
 // 'movement'
];
  dataSource: MatTableDataSource<Notification> = new MatTableDataSource();
  constructor(private nS: NotificationService ) {}
  ngOnInit(): void {
    this.nS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.nS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
