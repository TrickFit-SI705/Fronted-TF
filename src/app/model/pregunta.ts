import { Usuario } from "./usuario";

export class Pregunta {
  idPregunta: number = 0;
  tituloPregunta: string = "";
  contenidoPregunta: string = "";
  usuario: Usuario = new Usuario();
  respuestaPregunta: string="";
}
