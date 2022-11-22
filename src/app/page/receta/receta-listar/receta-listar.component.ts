import { Component, OnInit, ViewChild } from '@angular/core';
import { Receta } from 'src/app/model/receta';
import { RecetaService } from 'src/app/service/receta.service';
import { MatTableDataSource } from '@angular/material/table';
import { RecetaDialogoComponent } from './receta-dialogo/receta-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-receta-listar',
  templateUrl: './receta-listar.component.html',
  styleUrls: ['./receta-listar.component.css'],
})
export class RecetaListarComponent implements OnInit {
  lista: Receta[] = [];
  dataSource: MatTableDataSource<Receta> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'titulo', 'descrip', 'acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: RecetaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pService.listar().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
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
    this.dialog.open(RecetaDialogoComponent);
  }

  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe((data) => {
        this.pService.setLista(data);
      });
    });
  }
  getCantidad(){
    this.pService.setContador(this.dataSource.data.length);
    return this.dataSource.data.length;
  }
}
