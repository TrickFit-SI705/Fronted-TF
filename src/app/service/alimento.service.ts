import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../model/alimento';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  private alimento: Alimento = new Alimento();
  private url: string = "http://localhost:8080/alimentos";
  private listaCambio = new Subject<Alimento[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) {}
  listar(){
    return this.http.get<Alimento[]>(this.url);
  }
  insertar(alimento: Alimento) {
    return this.http.post(this.url, alimento);
  }
  setLista(listaNueva: Alimento[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(alimento: Alimento) {
    return this.http.put(this.url, alimento);
  }
  listarId(id: number) {
    return this.http.get<Alimento>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    this.alimento.nombreAlimento=texto;
    if (texto.length != 0) {
      return this.http.post<Alimento[]>(`${this.url}/buscar`, this.alimento);
    }
    return this.listar();
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
