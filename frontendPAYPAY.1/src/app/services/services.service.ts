import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Subject } from 'rxjs';
import { Services } from '../models/services';
import { HttpClient } from '@angular/common/http';

const base_url = enviroment.base;

@Injectable({
  providedIn: 'root'
})
  

export class ServicesService {
  private url = `${base_url}/servicios`;
  private listaCambio = new Subject<Services[]>();
  constructor(private http: HttpClient) { } 
  
  list() {
    return this.http.get<Services[]>(this.url);
  }

  insert(s: Services) {
    return this.http.post(this.url, s);
  }
  setList(listaNueva: Services[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }
}
