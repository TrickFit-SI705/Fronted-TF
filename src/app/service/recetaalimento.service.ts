import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { KcalBean } from '../model/KcalBean';
import { Recetaalimento } from '../model/recetaalimento';

@Injectable({
  providedIn: 'root'
})
export class RecetaalimentoService {
  private recetaalimento: Recetaalimento = new Recetaalimento();
  private url12: string = "http://localhost:8080/recetas-alimentos";
  private listaCambio = new Subject<Recetaalimento[]>()
  private listaCambioR = new Subject<KcalBean[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Recetaalimento[]>(this.url12);
  }
  insertar(dieta: Recetaalimento) {

    return this.http.post(this.url12, dieta);
  }

  modificar(dieta: Recetaalimento) {

    return this.http.put(this.url12, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url12}/${id}`);
  }
  buscar(texto: string) {
    this.recetaalimento.receta.tituloReceta=texto;
    if (texto.length != 0) {
      return this.http.post<Recetaalimento[]>(`${this.url12}/buscar`, this.recetaalimento);
    }
    return this.listar();
  }
  buscarRecetasPerdidaPeso() {
    return this.http.get<KcalBean[]>(`${this.url12}/reporte`)
  }
  listarId(id: number) {

    return this.http.get<Recetaalimento>(`${this.url12}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Recetaalimento[]) {
    this.listaCambio.next(listaNueva);
  }
  setListaR(listaNueva: KcalBean[]) {
    this.listaCambioR.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
