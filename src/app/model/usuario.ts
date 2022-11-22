import { Tipousuario } from "./tipousuaio";

export class Usuario {
  idUsuario: number = 0;
  dni: string = "";
  nombreUsuario: string = "";
  estaturaUsuario: number = 0;
  pesoUsuario: number = 0;
  tipo_usuario: Tipousuario = new Tipousuario();
  emailUsuario: string = "";
}
