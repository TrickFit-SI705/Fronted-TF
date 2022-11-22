import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Rutinaejercicio } from 'src/app/model/rutinaejercicio';
import { RutinaejercicioService } from 'src/app/service/rutinaejercicio.service';
import { RutinaejercicioDialogoComponent } from './rutinaejercicio-dialogo/rutinaejercicio-dialogo.component';

@Component({
  selector: 'app-rutinaejercicio-listar',
  templateUrl: './rutinaejercicio-listar.component.html',
  styleUrls: ['./rutinaejercicio-listar.component.css']
})
export class RutinaejercicioListarComponent implements OnInit {

  lista: Rutinaejercicio[] = [];
  dataSource: MatTableDataSource<Rutinaejercicio> = new MatTableDataSource();
  displayedColumns: string[]=['id','rutina','ejercicio','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: RutinaejercicioService,private dialog: MatDialog) { }

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
    this.dialog.open(RutinaejercicioDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
