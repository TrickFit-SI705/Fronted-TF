import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/model/pregunta';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-pregunta-buscar',
  templateUrl: './pregunta-buscar.component.html',
  styleUrls: ['./pregunta-buscar.component.css']
})
export class PreguntaBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: PreguntaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }

}
