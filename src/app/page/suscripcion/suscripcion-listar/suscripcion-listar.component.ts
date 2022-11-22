import { Component, OnInit, ViewChild } from '@angular/core';
import { Suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SuscripcionDialogoComponent } from './suscripcion-dialogo/suscripcion-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css']
})
export class SuscripcionListarComponent implements OnInit {
  lista: Suscripcion[] = [];
  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','usuario','fecha','tarjeta','plan','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: SuscripcionService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  getCantidad(){
    return this.dataSource.data.length;
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(SuscripcionDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
