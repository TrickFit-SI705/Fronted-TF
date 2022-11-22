import { Usuario } from "./usuario";

export class Rutina {
    idRutina: number = 0;
    usuario: Usuario=new Usuario();
    entrenador: Usuario=new Usuario();
    tituloRutina: string="";
    contenidoRutina: string="";
    vigente: boolean=true;
    nivelRutina: string="";
  } 