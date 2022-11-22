import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cantidadt } from 'src/app/model/cantidadt';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-reporte',
  templateUrl: './tarjeta-reporte.component.html',
  styleUrls: ['./tarjeta-reporte.component.css']
})
export class TarjetaReporteComponent implements OnInit {
  dataSource:MatTableDataSource<cantidadt> = new MatTableDataSource();
  displayedColumns: string[]=['Banco','cantidad'];
  constructor(private t:TarjetaService) { }

  ngOnInit(): void {
    this.t.buscarcantidadtarjeta().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
     })
  }

}
