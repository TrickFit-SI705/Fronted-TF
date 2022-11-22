import { Component, OnInit } from '@angular/core';
import { Recetaalimento } from 'src/app/model/recetaalimento';
import { RecetaalimentoService } from 'src/app/service/recetaalimento.service';

@Component({
  selector: 'app-recetaalimento-buscar',
  templateUrl: './recetaalimento-buscar.component.html',
  styleUrls: ['./recetaalimento-buscar.component.css']
})
export class RecetaalimentoBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: RecetaalimentoService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }

}
