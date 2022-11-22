import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PlanDialogoComponent } from './plan-dialogo/plan-dialogo.component';

@Component({
  selector: 'app-plan-listar',
  templateUrl: './plan-listar.component.html',
  styleUrls: ['./plan-listar.component.css']
})
export class PlanListarComponent implements OnInit {
  lista: Plan[] = [];
  dataSource: MatTableDataSource<Plan> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','detalle','tiempo','precio','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: PlanService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PlanDialogoComponent);
  }


  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);
      });
    });

  }
  getCantidad(){
    return this.dataSource.data.length;
  }

}
