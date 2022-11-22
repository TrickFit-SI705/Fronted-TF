import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ejercicio } from 'src/app/model/ejercicio';
import { EjercicioService } from 'src/app/service/ejercicio.service';

@Component({
  selector: 'app-ejercicio-creaedita',
  templateUrl: './ejercicio-creaedita.component.html',
  styleUrls: ['./ejercicio-creaedita.component.css']
})
export class EjercicioCreaeditaComponent implements OnInit {
  ejercicio: Ejercicio = new Ejercicio();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  constructor(private ejercicioService: EjercicioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.ejercicio.tituloEjercicio.length > 0 && this.ejercicio.descripEjercicio.length) {
      if (this.edicion) {
        this.ejercicioService.modificar(this.ejercicio).subscribe(() => {
          this.ejercicioService.listar().subscribe(data => {
            this.ejercicioService.setLista(data);
          })
        })
      }
      else{
        this.ejercicioService.insertar(this.ejercicio).subscribe(() => {
          this.ejercicioService.listar().subscribe(data => {
            this.ejercicioService.setLista(data);
          })
        })
      }
      
      this.router.navigate(['ejercicios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.ejercicioService.listarId(this.id).subscribe(data => {
        this.ejercicio = data;
      })
    }

  }

}
