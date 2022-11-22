import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaUQ2 } from 'src/app/model/respuesta_uq2';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-reporte2',
  templateUrl: './usuario-reporte2.component.html',
  styleUrls: ['./usuario-reporte2.component.css']
})
export class UsuarioReporte2Component implements OnInit {
  lista: RespuestaUQ2[] = [];
  dataSource: MatTableDataSource<RespuestaUQ2> = new MatTableDataSource();
  displayedColumns: string[] = ['dni', 'nombre', 'alimento', 'cantidad'];
  constructor(private uService: UsuarioService) { }

  ngOnInit(): void {
    this.uService.buscarAlimentoMasConsumido().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
