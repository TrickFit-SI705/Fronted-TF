import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rutinaejercicio } from '../model/rutinaejercicio';

@Injectable({
  providedIn: 'root'
})
export class RutinaejercicioService {
  private rutinaejercicio: Rutinaejercicio = new Rutinaejercicio();
  private url1: string = "http://localhost:8080/rutinas-ejercicios";
  private listaCambio = new Subject<Rutinaejercicio[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Rutinaejercicio[]>(this.url1);
  }
  insertar(dieta: Rutinaejercicio) {

    return this.http.post(this.url1, dieta);
  }

  modificar(dieta: Rutinaejercicio) {

    return this.http.put(this.url1, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url1}/${id}`);
  }
  buscar(texto: string) {
    this.rutinaejercicio.rutina.tituloRutina=texto;
    if (texto.length != 0) {
      return this.http.post<Rutinaejercicio[]>(`${this.url1}/buscar`, this.rutinaejercicio);
    }
    return this.listar();
  }
  listarId(id: number) {

    return this.http.get<Rutinaejercicio>(`${this.url1}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Rutinaejercicio[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
