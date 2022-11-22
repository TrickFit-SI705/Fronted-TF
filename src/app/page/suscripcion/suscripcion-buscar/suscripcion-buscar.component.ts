import { Component, OnInit } from '@angular/core';
import { Suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-buscar',
  templateUrl: './suscripcion-buscar.component.html',
  styleUrls: ['./suscripcion-buscar.component.css']
})
export class SuscripcionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private pService: SuscripcionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }
}
