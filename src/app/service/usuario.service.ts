import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaUQ1 } from '../model/respuesta_uq1';
import { RespuestaUQ2 } from '../model/respuesta_uq2';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url1: string = "http://localhost:8080/usuarios";
  private listaCambio = new Subject<Usuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Usuario[]>(this.url1);
  }
  insertar(usuario: Usuario) {
    return this.http.post(this.url1, usuario);
  }
  modificar(usuario: Usuario) {
    return this.http.put(this.url1, usuario);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url1}/${id}`);
  }
  buscar(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Usuario[]>(`${this.url1}/buscardni`, texto.toLowerCase());
    }
    return this.listar();
  }
  buscarUsuarioSobrepeso() {
    return this.http.get<RespuestaUQ1[]>(`${this.url1}/reporte1`)
  }
  buscarAlimentoMasConsumido() {
    return this.http.get<RespuestaUQ2[]>(`${this.url1}/reporte2`)
  }
  listarId(id: number) {

    return this.http.get<Usuario>(`${this.url1}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Usuario[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
