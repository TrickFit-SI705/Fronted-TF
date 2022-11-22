import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { Suscripcion } from 'src/app/model/suscripcion';
import { Tarjeta } from 'src/app/model/tarjeta';
import { Usuario } from 'src/app/model/usuario';
import { PlanService } from 'src/app/service/plan.service';
import { SuscripcionService } from 'src/app/service/suscripcion.service';
import { TarjetaService } from 'src/app/service/tarjeta.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-suscripcion-creaedita',
  templateUrl: './suscripcion-creaedita.component.html',
  styleUrls: ['./suscripcion-creaedita.component.css']
})
export class SuscripcionCreaeditaComponent implements OnInit {
  suscripcion: Suscripcion = new Suscripcion();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  listaTarjetas: Tarjeta[] = [];
  listaPlanes: Plan[] = [];
  idUsuarioSelec: number = 0;
  idTarjetaSelec: number = 0;
  idPlanSelec: number = 0;
  fechaSeleccionada: Date = moment().add(0, 'days').toDate();
  mensaje: string = '';
  constructor(private suscripcionService: SuscripcionService, private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService,private tarjetaService: TarjetaService, private planService: PlanService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listar().subscribe(data => { this.listaUsuarios = data });
    this.tarjetaService.listar().subscribe(data => { this.listaTarjetas = data });
    this.planService.listar().subscribe(data => { this.listaPlanes = data });
  }
  aceptar() {
    if (this.idUsuarioSelec > 0 && this.idTarjetaSelec > 0 && this.idPlanSelec > 0) {
      let u = new Usuario();
      let t = new Tarjeta();
      let p = new Plan();
      u.idUsuario = this.idUsuarioSelec;
      t.idTarjeta = this.idTarjetaSelec;
      p.idPlan = this.idPlanSelec;
      this.suscripcion.usuario = u;
      this.suscripcion.tarjeta = t;
      this.suscripcion.plan = p;
      this.suscripcion.fechaSuscripcion = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.suscripcionService.modificar(this.suscripcion).subscribe(() => {
          this.suscripcionService.listar().subscribe(data => {
            this.suscripcionService.setLista(data);
          });
        });

      } else {
        this.suscripcionService.insertar(this.suscripcion).subscribe(() => {
          this.suscripcionService.listar().subscribe(data => {
            this.suscripcionService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['suscripciones']);

    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.suscripcionService.listarId(this.id).subscribe(data => {
        this.suscripcion = data
        console.log(data);
        this.idUsuarioSelec = data.usuario.idUsuario;
        this.idTarjetaSelec = data.tarjeta.idTarjeta;
        this.idPlanSelec = data.plan.idPlan;
      });

    }

  }

}
