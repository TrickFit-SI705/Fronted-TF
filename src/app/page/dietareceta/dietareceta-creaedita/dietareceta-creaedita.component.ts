import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dieta } from 'src/app/model/Dieta';
import { DietaReceta } from 'src/app/model/dieta_receta';
import { Receta } from 'src/app/model/receta';
import { DietaService } from 'src/app/service/dieta.service';
import { DietarecetaService } from 'src/app/service/dietareceta.service';
import { RecetaService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-dietareceta-creaedita',
  templateUrl: './dietareceta-creaedita.component.html',
  styleUrls: ['./dietareceta-creaedita.component.css']
})
export class DietarecetaCreaeditaComponent implements OnInit {
  dietareceta: DietaReceta = new DietaReceta();
  id: number = 0;
  edicion: boolean = false;
  listaDietas: Dieta[] = [];
  listaRecetas: Receta[] =[];
  idDietaSelec: number = 0;
  idRecetaSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private dietarecetaService: DietarecetaService, private route: ActivatedRoute, private router: Router, private dietaService: DietaService,private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.dietaService.listar().subscribe(data => { this.listaDietas = data });
    this.recetaService.listar().subscribe(data => { this.listaRecetas = data });
  }

  aceptar() {
    if (this.idDietaSelec>0 && this.idRecetaSelec >0) {
      let d = new Dieta();
      let r = new Receta();
      d.idDieta = this.idDietaSelec;
      r.idReceta = this.idRecetaSelec;
      this.dietareceta.dieta = d;
      this.dietareceta.receta = r;
      if (this.edicion) {
        this.dietarecetaService.modificar(this.dietareceta).subscribe(() => {
          this.dietarecetaService.listar().subscribe(data => {
            this.dietarecetaService.setLista(data);
          });
        });

      } else {
        this.dietarecetaService.insertar(this.dietareceta).subscribe(() => {
          this.dietarecetaService.listar().subscribe(data => {
            this.dietarecetaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['dieta_recetas']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.dietarecetaService.listarId(this.id).subscribe(data => {
        this.dietareceta = data
        console.log(data);
        this.idDietaSelec = data.dieta.idDieta;
        this.idRecetaSelec = data.receta.idReceta;
      });

    }

  }
}
