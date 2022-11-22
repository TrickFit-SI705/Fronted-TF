import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Respuesta } from 'src/app/model/respuestaespecialista';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-pregunta-reporte',
  templateUrl: './pregunta-reporte.component.html',
  styleUrls: ['./pregunta-reporte.component.css']
})
export class PreguntaReporteComponent implements OnInit {
  lista: Respuesta[] = [];
  dataSource: MatTableDataSource<Respuesta> = new MatTableDataSource();
  displayedColumns: string[] = ['usuario','pregunta'];
  constructor(private pService: PreguntaService) { }

  ngOnInit(): void {
    this.pService.buscarRespuestasEspecialista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
