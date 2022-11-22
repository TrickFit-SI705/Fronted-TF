import { cantidads } from './../../../model/cantidads';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-reporte',
  templateUrl: './suscripcion-reporte.component.html',
  styleUrls: ['./suscripcion-reporte.component.css']
})
export class SuscripcionReporteComponent implements OnInit {
  dataSource:MatTableDataSource<cantidads> = new MatTableDataSource();
  displayedColumns: string[]=['Plan', 'mes','cantidad'];
  constructor(private t:SuscripcionService) { }

  ngOnInit(): void {
    this.t.buscarcantidadsuscripcion().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
     })
  }

}
