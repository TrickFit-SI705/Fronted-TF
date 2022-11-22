import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receta } from '../model/receta';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private receta: Receta = new Receta();
  private url4: string = "http://localhost:8080/recetas";
  private listaCambio = new Subject<Receta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  private ct: number = 0;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Receta[]>(this.url4);
  }
  insertar(receta: Receta) {
    return this.http.post(this.url4, receta);
  }
  setLista(listaNuevar: Receta[]) {
    this.listaCambio.next(listaNuevar);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(receta: Receta) {
    return this.http.put(this.url4, receta);
  }
  listarId(id: number) {
    return this.http.get<Receta>(`${this.url4}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url4 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    this.receta.tituloReceta=texto;
    if (texto.length != 0) {
      return this.http.post<Receta[]>(`${this.url4}/buscar`, this.receta);
    }
    return this.listar();
  }
  setContador(cont: number): void{
      this.ct=cont;
  }
  getContador(): number{
    return this.ct;
  }  
}
