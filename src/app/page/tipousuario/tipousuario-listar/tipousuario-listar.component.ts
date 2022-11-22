import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Tipousuario } from 'src/app/model/tipousuaio';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { TipousuarioDialogoComponent } from './tipousuario-dialogo/tipousuario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tipousuario-listar',
  templateUrl: './tipousuario-listar.component.html',
  styleUrls: ['./tipousuario-listar.component.css']
})
export class TipousuarioListarComponent implements OnInit {
  lista: Tipousuario[] = [];
  dataSource: MatTableDataSource<Tipousuario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipo','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private tipousuarioService: TipousuarioService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.tipousuarioService.listar().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.tipousuarioService.getLista().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.tipousuarioService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipousuarioDialogoComponent);
  }
  getCantidad(){
    return this.dataSource.data.length;
  }
  eliminar(id: number) {
    this.tipousuarioService.eliminar(id).subscribe(() => {
      this.tipousuarioService.listar().subscribe(data => {
        this.tipousuarioService.setLista(data);
      });
    });
  }

}
