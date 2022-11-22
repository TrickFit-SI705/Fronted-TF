import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../model/pregunta';
import { Respuesta } from '../model/respuestaespecialista';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private pregunta: Pregunta = new Pregunta();
  private url2: string = "http://localhost:8080/preguntas";
  private listaCambio = new Subject<Pregunta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Pregunta[]>(this.url2);
  }
  insertar(dieta: Pregunta) {

    return this.http.post(this.url2, dieta);
  }

  modificar(dieta: Pregunta) {

    return this.http.put(this.url2, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url2}/${id}`);
  }
  buscar(texto: string) {
    this.pregunta.tituloPregunta=texto;
    if (texto.length != 0) {
      return this.http.post<Pregunta[]>(`${this.url2}/buscar`, this.pregunta);
    }
    return this.listar();
  }
  buscarRespuestasEspecialista(){
    return this.http.get<Respuesta[]>(`${this.url2}/reporte`);
  }
  listarId(id: number) {

    return this.http.get<Pregunta>(`${this.url2}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Pregunta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
