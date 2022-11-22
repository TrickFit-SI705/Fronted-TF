import { Component, OnInit } from '@angular/core';
import { Rutina } from 'src/app/model/rutina';
import { RutinaService } from 'src/app/service/rutina.service';

@Component({
  selector: 'app-rutina-buscar',
  templateUrl: './rutina-buscar.component.html',
  styleUrls: ['./rutina-buscar.component.css']
})
export class RutinaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private pService: RutinaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.pService.buscar(e.target.value).subscribe(data=>{
      this.pService.setLista(data);
    });
  }

}
