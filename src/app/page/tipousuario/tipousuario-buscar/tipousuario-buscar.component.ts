import { Component, OnInit } from '@angular/core';
import { Tipousuario } from 'src/app/model/tipousuaio';
import { TipousuarioService } from 'src/app/service/tipousuario.service';


@Component({
  selector: 'app-tipousuario-buscar',
  templateUrl: './tipousuario-buscar.component.html',
  styleUrls: ['./tipousuario-buscar.component.css']
})
export class TipousuarioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private tipousuarioService: TipousuarioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.tipousuarioService.buscar(e.target.value).subscribe(data=>{
      this.tipousuarioService.setLista(data);
    });
  }
}
