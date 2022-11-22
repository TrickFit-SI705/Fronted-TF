import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Recomendacion } from 'src/app/model/dietasrecomendadas';
import { DietaService } from 'src/app/service/dieta.service';

@Component({
  selector: 'app-dieta-reporte',
  templateUrl: './dieta-reporte.component.html',
  styleUrls: ['./dieta-reporte.component.css']
})
export class DietaReporteComponent implements OnInit {
  lista: Recomendacion[] = [];
  dataSource: MatTableDataSource<Recomendacion> = new MatTableDataSource();
  displayedColumns: string[] = ['tipo_usuario','nombre_usuario','titulo_dieta','recomendaciones'];
  constructor(private pService: DietaService) { }

  ngOnInit(): void {
    this.pService.buscarDietasRecomendadas().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
