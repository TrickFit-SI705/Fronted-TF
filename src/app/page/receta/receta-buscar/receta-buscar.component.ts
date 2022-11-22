import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/model/receta';
import { RecetaService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-receta-buscar',
  templateUrl: './receta-buscar.component.html',
  styleUrls: ['./receta-buscar.component.css']
})
export class RecetaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.recetaService.buscar(e.target.value).subscribe(data=>{
      this.recetaService.setLista(data);
    });
  }
}
