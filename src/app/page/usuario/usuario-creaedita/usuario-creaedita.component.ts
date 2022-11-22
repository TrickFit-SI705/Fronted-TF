import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tipousuario } from 'src/app/model/tipousuaio';
import { Usuario } from 'src/app/model/usuario';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit {
  usuario: Usuario = new Usuario();
  id: number = 0;
  edicion: boolean = false;
  listaTipoUsuarios: Tipousuario[] = [];
  idTipoSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router, private tipousuarioService: TipousuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tipousuarioService.listar().subscribe(data => { this.listaTipoUsuarios = data });
  }
  aceptar() {
    if (this.usuario.nombreUsuario.length > 0 &&
      this.idTipoSelec > 0 && this.usuario.dni.length == 8 && this.usuario.emailUsuario.length > 0 && this.usuario.estaturaUsuario > 0 && this.usuario.pesoUsuario > 0) {
      let tu = new Tipousuario();
      tu.idTipoUsuario = this.idTipoSelec;
      this.usuario.tipo_usuario = tu;
      if (this.edicion) {
        this.usuarioService.modificar(this.usuario).subscribe(() => {
          this.usuarioService.listar().subscribe(data => {
            this.usuarioService.setLista(data);
          });
        });

      } else {
        this.usuarioService.insertar(this.usuario).subscribe(() => {
          this.usuarioService.listar().subscribe(data => {
            this.usuarioService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['usuarios']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.usuarioService.listarId(this.id).subscribe(data => {
        this.usuario = data
        console.log(data);
        this.idTipoSelec = data.tipo_usuario.idTipoUsuario;
      });

    }

  }
}
