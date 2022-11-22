import { Component, OnInit } from '@angular/core';
import { DietaReceta } from 'src/app/model/dieta_receta';
import { DietarecetaService } from 'src/app/service/dietareceta.service';

@Component({
  selector: 'app-dietareceta-buscar',
  templateUrl: './dietareceta-buscar.component.html',
  styleUrls: ['./dietareceta-buscar.component.css']
})
export class DietarecetaBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: DietarecetaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }

}
