import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlanUsuarioBean } from 'src/app/model/PlanUsuarioBean';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-reporte',
  templateUrl: './tipousuario-reporte.component.html',
  styleUrls: ['./tipousuario-reporte.component.css']
})
export class TipousuarioReporteComponent implements OnInit {
  lista: PlanUsuarioBean[]=[];
  dataSource: MatTableDataSource<PlanUsuarioBean> = new MatTableDataSource();
  displayedColumns: string[] = ['nombreUsuario', 'nombrePlan', 'fecha'];
  constructor(private pService: TipousuarioService) { }

  ngOnInit(): void {
    this.pService.buscarClienteCita().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
