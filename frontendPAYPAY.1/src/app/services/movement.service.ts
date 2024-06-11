import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Movement } from '../models/movement';


//importar de environment.ts
const base_url = enviroment.base

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private url = `${base_url}/movimientos`;
  private listaCambio = new Subject<Movement[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Movement[]>(this.url);
  }

  insert(m: Movement) {
    return this.http.post(this.url, m);
  }
  setList(listaNueva: Movement[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<Movement>(`${this.url}/${id}`);
  }
  update(c: Movement) {
    return this.http.put(this.url, c);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);

  }
}

