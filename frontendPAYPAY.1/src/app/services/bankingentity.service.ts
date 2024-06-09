import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Bankingentity } from '../models/bankingentity';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = enviroment.base;
@Injectable({
  providedIn: 'root',
})
export class BankingentityService {
  private url = `${base_url}/entidades`;
  private listaCambio = new Subject<Bankingentity[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Bankingentity[]>(this.url);
  }

  insert(b: Bankingentity) {
    return this.http.post(this.url, b);
  }
  setList(listaNueva: Bankingentity[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }
  getById(id: number) {
    return this.http.get<Bankingentity>(`${this.url}/listarid/${id}`);
  }
  update(b: Bankingentity) {
    return this.http.put(this.url, b);
  }
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
