import { Banco } from "./banco";
import { Plan } from "./plan";
import { Usuario } from "./usuario";
import {Tarjeta} from "./tarjeta";

export class Suscripcion{
    idSuscripcion: number =0;
    usuario: Usuario=new Usuario();
    fechaSuscripcion: string = "";
    tarjeta: Tarjeta= new Tarjeta();
    plan: Plan = new Plan();
}