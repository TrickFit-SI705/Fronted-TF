import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alimento } from 'src/app/model/alimento';
import { Receta } from 'src/app/model/receta';
import { Recetaalimento } from 'src/app/model/recetaalimento';
import { AlimentoService } from 'src/app/service/alimento.service';
import { RecetaService } from 'src/app/service/receta.service';
import { RecetaalimentoService } from 'src/app/service/recetaalimento.service';

@Component({
  selector: 'app-recetaalimento-creaedita',
  templateUrl: './recetaalimento-creaedita.component.html',
  styleUrls: ['./recetaalimento-creaedita.component.css']
})
export class RecetaalimentoCreaeditaComponent implements OnInit {
  recetaalimento: Recetaalimento = new Recetaalimento();
  id: number = 0;
  edicion: boolean = false;
  listaAlimentos: Alimento[] = [];
  listaRecetas: Receta[] = [];
  idAlimentosSelec: number = 0;
  idRecetaSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private recetaalimentoService: RecetaalimentoService, private route: ActivatedRoute, private router: Router, private alimentoService: AlimentoService,private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.alimentoService.listar().subscribe(data => { this.listaAlimentos = data });
    this.recetaService.listar().subscribe(data => { this.listaRecetas = data });
  }
  aceptar() {
    if (this.idAlimentosSelec>0 && this.idRecetaSelec>0) {
      let a = new Alimento();
      let r = new Receta();
      a.idAlimento = this.idAlimentosSelec;
      r.idReceta = this.idRecetaSelec;
      this.recetaalimento.alimento = a;
      this.recetaalimento.receta = r;
      if (this.edicion) {
        this.recetaalimentoService.modificar(this.recetaalimento).subscribe(() => {
          this.recetaalimentoService.listar().subscribe(data => {
            this.recetaalimentoService.setLista(data);
          });
        });

      } else {
        this.recetaalimentoService.insertar(this.recetaalimento).subscribe(() => {
          this.recetaalimentoService.listar().subscribe(data => {
            this.recetaalimentoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['receta_alimentos']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.recetaalimentoService.listarId(this.id).subscribe(data => {
        this.recetaalimento = data
        console.log(data);
        this.idAlimentosSelec = data.alimento.idAlimento;
        this.idRecetaSelec = data.receta.idReceta;
      });

    }

  }
}
