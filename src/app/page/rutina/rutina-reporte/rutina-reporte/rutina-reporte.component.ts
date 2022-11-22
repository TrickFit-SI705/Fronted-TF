import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ReporteEntrenador } from 'src/app/model/ReporteEntrenador';
import { RutinaService } from 'src/app/service/rutina.service';

@Component({
  selector: 'app-rutina-reporte',
  templateUrl: './rutina-reporte.component.html',
  styleUrls: ['./rutina-reporte.component.css']
})
export class RutinaReporteComponent implements OnInit {
  lista: ReporteEntrenador[]=[];
  dataSource: MatTableDataSource<ReporteEntrenador> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre_usuario','nivel_rutina','numerorutinas'];
  constructor(private pService: RutinaService) { }

  ngOnInit(): void {
    this.pService.ReporteRutinaEntrenadores().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    }) 
  }

}
