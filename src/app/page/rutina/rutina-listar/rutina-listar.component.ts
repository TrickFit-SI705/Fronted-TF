import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Rutina } from 'src/app/model/rutina';
import { RutinaService } from 'src/app/service/rutina.service';
import { RutinaDialogoComponent } from './rutina-dialogo/rutina-dialogo.component';

@Component({
  selector: 'app-rutina-listar',
  templateUrl: './rutina-listar.component.html',
  styleUrls: ['./rutina-listar.component.css']
})
export class RutinaListarComponent implements OnInit {

  lista: Rutina[] = [];
  dataSource: MatTableDataSource<Rutina> = new MatTableDataSource();
  displayedColumns: string[]=['id','titulo','usuario','entrenador','Contenido','Vigente','nivel','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: RutinaService,private dialog: MatDialog) { }

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
    this.dialog.open(RutinaDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
