import { Component, OnInit } from '@angular/core';
import { Rutinaejercicio } from 'src/app/model/rutinaejercicio';
import { RutinaejercicioService } from 'src/app/service/rutinaejercicio.service';

@Component({
  selector: 'app-rutinaejercicio-buscar',
  templateUrl: './rutinaejercicio-buscar.component.html',
  styleUrls: ['./rutinaejercicio-buscar.component.css']
})
export class RutinaejercicioBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: RutinaejercicioService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }
}
