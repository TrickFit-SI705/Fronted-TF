import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReporteEntrenador } from '../model/ReporteEntrenador';
import { Rutina } from '../model/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private rutina: Rutina = new Rutina();
  private url1: string = "http://localhost:8080/rutinas";
  private listaCambio = new Subject<Rutina[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Rutina[]>(this.url1);
  }
  insertar(dieta: Rutina) {

    return this.http.post(this.url1, dieta);
  }

  modificar(dieta: Rutina) {

    return this.http.put(this.url1, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url1}/${id}`);
  }
  buscar(texto: string) {
    this.rutina.tituloRutina=texto;
    if (texto.length != 0) {
      return this.http.post<Rutina[]>(`${this.url1}/buscar`, this.rutina);
    }
    return this.listar();
  }
  ReporteRutinaEntrenadores(){
    return this.http.get<ReporteEntrenador[]>(`${this.url1}/reporte`);
  }
  listarId(id: number) {

    return this.http.get<Rutina>(`${this.url1}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Rutina []) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
