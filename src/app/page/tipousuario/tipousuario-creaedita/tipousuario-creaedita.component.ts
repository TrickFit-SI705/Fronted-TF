import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tipousuario } from 'src/app/model/tipousuaio';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
@Component({
  selector: 'app-tipousuario-creaedita',
  templateUrl: './tipousuario-creaedita.component.html',
  styleUrls: ['./tipousuario-creaedita.component.css']
})
export class TipousuarioCreaeditaComponent implements OnInit {
  tipousuario: Tipousuario = new Tipousuario();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  constructor(private tipousuarioServise: TipousuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tipousuario.nombreTipoUsuario.length > 0) {
      if (this.edicion) {
        this.tipousuarioServise.modificar(this.tipousuario).subscribe(data => {
          this.tipousuarioServise.listar().subscribe(data => {
            this.tipousuarioServise.setLista(data);
          })
        })
      }
      else{
        this.tipousuarioServise.insertar(this.tipousuario).subscribe(data => {
          this.tipousuarioServise.listar().subscribe(data => {
            this.tipousuarioServise.setLista(data);
          })
        })
      }
      
      this.router.navigate(['tipo_usuarios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.tipousuarioServise.listarId(this.id).subscribe(data => {
        this.tipousuario = data;
      })
    }

  }

}
