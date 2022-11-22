import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../model/banco';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  private banco: Banco = new Banco();
  private url7: string = "http://localhost:8080/bancos";
  private listaCambio = new Subject<Banco[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<Banco[]>(this.url7);
  }
  insertar(banco: Banco) {
    return this.http.post(this.url7, banco);
  }
  setLista(listaNuevar: Banco[]) {
    this.listaCambio.next(listaNuevar);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(banco: Banco) {
    return this.http.put(this.url7, banco);
  }
  listarId(id: number) {
    return this.http.get<Banco>(`${this.url7}/${id}`);
  }  
  eliminar(id: number) {
    return this.http.delete(`${this.url7}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    this.banco.nombreBanco=texto;
    if (texto.length != 0) {
      return this.http.post<Banco[]>(`${this.url7}/buscar`, this.banco);
    }
    return this.listar();
  }

}
