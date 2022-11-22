import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaUQ1 } from 'src/app/model/respuesta_uq1';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-reporte1',
  templateUrl: './usuario-reporte1.component.html',
  styleUrls: ['./usuario-reporte1.component.css']
})
export class UsuarioReporte1Component implements OnInit {
  lista: RespuestaUQ1[] = [];
  dataSource: MatTableDataSource<RespuestaUQ1> = new MatTableDataSource();
  displayedColumns: string[] = ['dni', 'nombre', 'imc', 'cantidad'];
  constructor(private uService: UsuarioService) { }

  ngOnInit(): void {
    this.uService.buscarUsuarioSobrepeso().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
