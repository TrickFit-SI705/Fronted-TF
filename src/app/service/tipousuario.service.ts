import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tipousuario} from '../model/tipousuaio';
import { Subject , EMPTY} from 'rxjs';
import { PlanUsuarioBean } from '../model/PlanUsuarioBean';
import { ReporteTipousuario } from '../model/ReporteTipousuario';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {
  private tipousuario: Tipousuario = new Tipousuario();
  private url10: string = "http://localhost:8080/tipo_usuarios";
  private listaCambio = new Subject<Tipousuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Tipousuario[]>(this.url10);
  }
  insertar(tipousuaio: Tipousuario) {
    return this.http.post(this.url10, tipousuaio);
  }
  setLista(listaNueva: Tipousuario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tipousuaio: Tipousuario) {
    return this.http.put(this.url10, tipousuaio);
  }
  listarId(id: number) {
    return this.http.get<Tipousuario>(`${this.url10}/${id}`);
  }
  buscar(texto: string) {
    this.tipousuario.nombreTipoUsuario=texto;
    if (texto.length != 0) {
      return this.http.post<Tipousuario[]>(`${this.url10}/buscar`, this.tipousuario);
    }
    return this.listar();
  }
  buscarClienteCita() {
    return this.http.get<PlanUsuarioBean[]>(`${this.url10}/reporte2`)
  }
  BuscarCantidadUsuarios(){
    return this.http.get<ReporteTipousuario[]>(`${this.url10}/reporte1`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url10 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
