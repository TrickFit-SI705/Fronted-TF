import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicio';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EjercicioDialogoComponent } from './ejercicio-dialogo/ejercicio-dialogo.component';


@Component({
  selector: 'app-ejercicio-listar',
  templateUrl: './ejercicio-listar.component.html',
  styleUrls: ['./ejercicio-listar.component.css'],
})
export class EjercicioListarComponent implements OnInit {
  lista: Ejercicio[] = [];
  dataSource: MatTableDataSource<Ejercicio> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'titulo', 'descrip','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: EjercicioService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pService.listar().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.pService.getLista().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EjercicioDialogoComponent);
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
