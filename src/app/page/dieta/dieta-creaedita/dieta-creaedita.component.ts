import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dieta } from 'src/app/model/Dieta';
import { Usuario } from 'src/app/model/usuario';
import { DietaService } from 'src/app/service/dieta.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-dieta-creaedita',
  templateUrl: './dieta-creaedita.component.html',
  styleUrls: ['./dieta-creaedita.component.css']
})
export class DietaCreaeditaComponent implements OnInit {
  dieta: Dieta = new Dieta();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSelec: number = 0;
  idNutricionistaSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private dietaService: DietaService, private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listar().subscribe(data => { this.listaUsuarios = data });
  }
  aceptar() {
    if (this.dieta.tituloDieta.length > 0 &&
      this.idUsuarioSelec>0 && this.idNutricionistaSelec > 0 && this.dieta.contenidoDieta.length > 0) {
      let u = new Usuario();
      let n = new Usuario();
      u.idUsuario = this.idUsuarioSelec;
      n.idUsuario = this.idNutricionistaSelec;
      this.dieta.usuario = u;
      this.dieta.nutricionista = n;
      if (this.edicion) {
        this.dietaService.modificar(this.dieta).subscribe(() => {
          this.dietaService.listar().subscribe(data => {
            this.dietaService.setLista(data);
          });
        });

      } else {
        this.dietaService.insertar(this.dieta).subscribe(() => {
          this.dietaService.listar().subscribe(data => {
            this.dietaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['dietas']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.dietaService.listarId(this.id).subscribe(data => {
        this.dieta = data
        console.log(data);
        this.idUsuarioSelec = data.usuario.idUsuario;
        this.idNutricionistaSelec = data.nutricionista.idUsuario;
      });

    }

  }

}
