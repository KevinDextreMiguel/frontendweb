import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Voucher } from '../models/voucher';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  private url = `${base_url}/comprobantes`;
  private listaCambio = new Subject<Voucher[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Voucher[]>(this.url);
  }

  insert(v: Voucher) {
    return this.http.post(this.url, v);
  }
  setList(listaNueva:Voucher[] ) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }

}
