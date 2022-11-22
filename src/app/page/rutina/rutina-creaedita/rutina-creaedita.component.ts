import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rutina } from 'src/app/model/rutina';
import { Usuario } from 'src/app/model/usuario';
import { RutinaService } from 'src/app/service/rutina.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-rutina-creaedita',
  templateUrl: './rutina-creaedita.component.html',
  styleUrls: ['./rutina-creaedita.component.css']
})
export class RutinaCreaeditaComponent implements OnInit {
  rutina: Rutina = new Rutina();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSelec: number = 0;
  idEntrenadorSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private rutinaService: RutinaService, private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listar().subscribe(data => { this.listaUsuarios = data });
  } 
  aceptar() {
    if (this.rutina.tituloRutina.length > 0 &&
      this.idUsuarioSelec>0 && this.idEntrenadorSelec>0 && this.rutina.contenidoRutina.length > 0 && this.rutina.nivelRutina.length > 0) {
      let u = new Usuario();
      let e = new Usuario();
      u.idUsuario = this.idUsuarioSelec;
      e.idUsuario = this.idEntrenadorSelec;
      this.rutina.usuario = u;
      this.rutina.entrenador = e;
      if (this.edicion) {
        this.rutinaService.modificar(this.rutina).subscribe(() => {
          this.rutinaService.listar().subscribe(data => {
            this.rutinaService.setLista(data);
          });
        });

      } else {
        this.rutinaService.insertar(this.rutina).subscribe(() => {
          this.rutinaService.listar().subscribe(data => {
            this.rutinaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['rutinas']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.rutinaService.listarId(this.id).subscribe(data => {
        this.rutina = data
        console.log(data);
        this.idUsuarioSelec = data.usuario.idUsuario;
        this.idEntrenadorSelec = data.entrenador.idUsuario;
      });

    }

  }

}
