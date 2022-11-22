import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tarjeta } from 'src/app/model/tarjeta';
import { TarjetaService } from 'src/app/service/tarjeta.service';
import { TarjetaDialogoComponent } from './tarjeta-dialogo/tarjeta-dialogo.component';

@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent implements OnInit {

  lista:Tarjeta[] = [];
  dataSource:MatTableDataSource<Tarjeta> = new MatTableDataSource();
  displayedColumns: string[]=['id','numeroTarjeta','banco','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService:TarjetaService,private dialog: MatDialog) { }

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
    this.dialog.open(TarjetaDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
