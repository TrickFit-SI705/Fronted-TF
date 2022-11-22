import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteTipousuario } from 'src/app/model/ReporteTipousuario';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-reporte2',
  templateUrl: './tipousuario-reporte2.component.html',
  styleUrls: ['./tipousuario-reporte2.component.css']
})
export class TipousuarioReporte2Component implements OnInit {
  lista: ReporteTipousuario[]=[];
  dataSource: MatTableDataSource<ReporteTipousuario> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre_tipo_usuario','numerousuario'];
  constructor(private pService: TipousuarioService) { }

  ngOnInit(): void {
    this.pService.BuscarCantidadUsuarios().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    }) 
  }

}
