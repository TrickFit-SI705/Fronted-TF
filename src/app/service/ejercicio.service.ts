import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ejercicio } from '../model/ejercicio';
import { Subject , EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  private ejercicio: Ejercicio = new Ejercicio();
  private url5: string = "http://localhost:8080/ejercicios";
  private listaCambio = new Subject<Ejercicio[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Ejercicio[]>(this.url5);
  }
  insertar(ejercicio: Ejercicio) {
    return this.http.post(this.url5, ejercicio);
  }
  setLista(listaNueva: Ejercicio[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(ejercicio: Ejercicio) {
    return this.http.put(this.url5, ejercicio);
  }
  listarId(id: number) {
    return this.http.get<Ejercicio>(`${this.url5}/${id}`);
  }
  buscar(texto: string) {
    this.ejercicio.tituloEjercicio=texto;
    if (texto.length != 0) {
      return this.http.post<Ejercicio[]>(`${this.url5}/buscar`, this.ejercicio);
    }
    return this.listar();
  }
  eliminar(id: number) {
    return this.http.delete(this.url5 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
