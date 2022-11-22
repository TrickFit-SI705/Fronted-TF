import { Component, OnInit } from '@angular/core';
import { Dieta } from 'src/app/model/Dieta';
import { DietaService } from 'src/app/service/dieta.service';

@Component({
  selector: 'app-dieta-buscar',
  templateUrl: './dieta-buscar.component.html',
  styleUrls: ['./dieta-buscar.component.css']
})
export class DietaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private dietaService: DietaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.dietaService.buscar(e.target.value).subscribe(data=>{
      this.dietaService.setLista(data);
    });
  }
  

}
