import { Usuario } from "./usuario";

export class Cita{
    idCita: number=0;
    usuario: Usuario = new Usuario();
    especialista: Usuario = new Usuario();
    fechaCita: string = "";
    horaCita: string = "";
}