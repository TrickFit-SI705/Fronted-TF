import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cita } from 'src/app/model/cita';
import { Usuario } from 'src/app/model/usuario';
import { CitaService } from 'src/app/service/cita.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cita-creaedita',
  templateUrl: './cita-creaedita.component.html',
  styleUrls: ['./cita-creaedita.component.css']
})
export class CitaCreaeditaComponent implements OnInit {
  cita: Cita = new Cita();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSelec: number = 0;
  idEspecialistaSelec: number = 0;
  fechaSeleccionada: Date = moment().add(0, 'days').toDate();
  minFecha: Date = moment().add(0, 'days').toDate();
  mensaje: string = '';
  constructor(private citaService: CitaService, private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listar().subscribe(data => { this.listaUsuarios = data });
  }
  aceptar() {
    if (this.idUsuarioSelec > 0 && this.cita.horaCita.length == 4 && this.idEspecialistaSelec > 0) {
      let u = new Usuario();
      let e = new Usuario();
      u.idUsuario = this.idUsuarioSelec;
      e.idUsuario = this.idEspecialistaSelec;
      this.cita.usuario = u;
      this.cita.especialista = e;
      this.cita.fechaCita = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.citaService.modificar(this.cita).subscribe(() => {
          this.citaService.listar().subscribe(data => {
            this.citaService.setLista(data);
          });
        });

      } else {
        this.citaService.insertar(this.cita).subscribe(() => {
          this.citaService.listar().subscribe(data => {
            this.citaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['citas']);

    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.citaService.listarId(this.id).subscribe(data => {
        this.cita = data
        console.log(data);
        this.idUsuarioSelec = data.usuario.idUsuario;
        this.idEspecialistaSelec = data.especialista.idUsuario;
        this.fechaSeleccionada = new Date(data.fechaCita);
      });

    }

  }

}
