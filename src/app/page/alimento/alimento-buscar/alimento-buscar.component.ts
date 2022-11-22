import { Component, OnInit } from '@angular/core';
import { Alimento } from 'src/app/model/alimento';
import { AlimentoService } from 'src/app/service/alimento.service';

@Component({
  selector: 'app-alimento-buscar',
  templateUrl: './alimento-buscar.component.html',
  styleUrls: ['./alimento-buscar.component.css']
})
export class AlimentoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private alimentoService: AlimentoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.alimentoService.buscar(e.target.value).subscribe(data=>{
      this.alimentoService.setLista(data);
    });
  }

}
