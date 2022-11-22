import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pregunta } from 'src/app/model/pregunta';
import { Usuario } from 'src/app/model/usuario';
import { PreguntaService } from 'src/app/service/pregunta.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-pregunta-creaedita',
  templateUrl: './pregunta-creaedita.component.html',
  styleUrls: ['./pregunta-creaedita.component.css']
})
export class PreguntaCreaeditaComponent implements OnInit {
  pregunta: Pregunta = new Pregunta();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private preguntaService: PreguntaService , private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listar().subscribe(data => { this.listaUsuarios = data });
  }
  aceptar() {
    if (this.pregunta.tituloPregunta.length > 0 &&
      this.idUsuarioSelec > 0 && this.pregunta.contenidoPregunta.length > 0) {
      let u = new Usuario();
      u.idUsuario = this.idUsuarioSelec;
      this.pregunta.usuario = u;
      if (this.edicion) {
        this.preguntaService.modificar(this.pregunta).subscribe(() => {
          this.preguntaService.listar().subscribe(data => {
            this.preguntaService.setLista(data);
          });
        });

      } else {
        this.preguntaService.insertar(this.pregunta).subscribe(() => {
          this.preguntaService.listar().subscribe(data => {
            this.preguntaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['preguntas']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.preguntaService.listarId(this.id).subscribe(data => {
        this.pregunta = data
        console.log(data);
        this.idUsuarioSelec = data.usuario.idUsuario;
      });

    }

  }
}
