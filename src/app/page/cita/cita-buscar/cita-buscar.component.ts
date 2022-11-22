import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-buscar',
  templateUrl: './cita-buscar.component.html',
  styleUrls: ['./cita-buscar.component.css']
})
export class CitaBuscarComponent implements OnInit {
  textoBuscar: string =""
  constructor(private citaService: CitaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    this.citaService.buscar(e.target.value).subscribe(data=>{
      this.citaService.setLista(data);
    });
  }


}
