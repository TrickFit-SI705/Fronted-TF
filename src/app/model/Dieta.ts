import { Usuario } from "./usuario";

export class Dieta {
    idDieta: number = 0;
    usuario: Usuario=new Usuario();
    nutricionista: Usuario=new Usuario();
    tituloDieta: string="";
    contenidoDieta: string="";
    vigente: boolean= true;
  }