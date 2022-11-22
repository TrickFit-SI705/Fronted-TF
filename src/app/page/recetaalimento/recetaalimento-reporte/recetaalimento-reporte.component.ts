import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { KcalBean } from 'src/app/model/KcalBean';
import { RecetaalimentoService } from 'src/app/service/recetaalimento.service';

@Component({
  selector: 'app-recetaalimento-reporte',
  templateUrl: './recetaalimento-reporte.component.html',
  styleUrls: ['./recetaalimento-reporte.component.css']
})
export class RecetaalimentoReporteComponent implements OnInit {
  lista: KcalBean[]=[];
  dataSource: MatTableDataSource<KcalBean> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'titulo', 'totalCal'];
  constructor(private pService: RecetaalimentoService) { }

  ngOnInit(): void {
    this.pService.buscarRecetasPerdidaPeso().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
