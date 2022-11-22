import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ejercicio } from 'src/app/model/ejercicio';
import { Rutina } from 'src/app/model/rutina';
import { Rutinaejercicio } from 'src/app/model/rutinaejercicio';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { RutinaService } from 'src/app/service/rutina.service';
import { RutinaejercicioService } from 'src/app/service/rutinaejercicio.service';

@Component({
  selector: 'app-rutinaejercicio-creaedita',
  templateUrl: './rutinaejercicio-creaedita.component.html',
  styleUrls: ['./rutinaejercicio-creaedita.component.css']
})
export class RutinaejercicioCreaeditaComponent implements OnInit {
  rutinaejercicio: Rutinaejercicio = new Rutinaejercicio();
  id: number = 0;
  edicion: boolean = false;
  listaRutinas: Rutina[] = [];
  idRutinaSelec: number = 0;
  listaEjercicios: Ejercicio[]=[];
  idEjercicioSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private rutinaejercicioService: RutinaejercicioService, private route: ActivatedRoute, private router: Router, private rutinaService: RutinaService, private ejercicioService: EjercicioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.rutinaService.listar().subscribe(data => { this.listaRutinas = data });
    this.ejercicioService.listar().subscribe(data => { this.listaEjercicios = data }); 
  }
  aceptar() {
    if (this.idRutinaSelec>0 && this.idEjercicioSelec >0) {
      let r = new Rutina();
      let e = new Ejercicio();
      r.idRutina = this.idRutinaSelec;
      e.idEjercicio = this.idEjercicioSelec;
      this.rutinaejercicio.rutina = r;
      this.rutinaejercicio.ejercicio = e;
      if (this.edicion) {
        this.rutinaejercicioService.modificar(this.rutinaejercicio).subscribe(() => {
          this.rutinaejercicioService.listar().subscribe(data => {
            this.rutinaejercicioService.setLista(data);
          });
        });

      } else {
        this.rutinaejercicioService.insertar(this.rutinaejercicio).subscribe(() => {
          this.rutinaejercicioService.listar().subscribe(data => {
            this.rutinaejercicioService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['rutina_ejercicios']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.rutinaejercicioService.listarId(this.id).subscribe(data => {
        this.rutinaejercicio = data
        console.log(data);
        this.idRutinaSelec = data.rutina.idRutina;
        this.idEjercicioSelec = data.ejercicio.idEjercicio;
      });

    }

  }
}
