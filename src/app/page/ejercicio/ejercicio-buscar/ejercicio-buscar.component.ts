import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicio';
import { EjercicioService } from 'src/app/service/ejercicio.service';


@Component({
  selector: 'app-ejercicio-buscar',
  templateUrl: './ejercicio-buscar.component.html',
  styleUrls: ['./ejercicio-buscar.component.css']
})
export class EjercicioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ejercicioService: EjercicioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.ejercicioService.buscar(e.target.value).subscribe(data=>{
      this.ejercicioService.setLista(data);
    });
  }

}
