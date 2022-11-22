import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/model/tarjeta';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-buscar',
  templateUrl: './tarjeta-buscar.component.html',
  styleUrls: ['./tarjeta-buscar.component.css']
})
export class TarjetaBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: TarjetaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }

}
