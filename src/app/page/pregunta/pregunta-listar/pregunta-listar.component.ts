import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pregunta } from 'src/app/model/pregunta';
import { PreguntaService } from'src/app/service/pregunta.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PreguntaDialogoComponent } from './pregunta-dialogo/pregunta-dialogo.component';

@Component({
  selector: 'app-pregunta-listar',
  templateUrl: './pregunta-listar.component.html',
  styleUrls: ['./pregunta-listar.component.css']
})
export class PreguntaListarComponent implements OnInit {
  lista: Pregunta[] = [];
  dataSource: MatTableDataSource<Pregunta> = new MatTableDataSource();
  displayedColumns: string[]=['id','titulo','contenido','Usuario','respuesta','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: PreguntaService,private dialog: MatDialog) { }

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
    this.dialog.open(PreguntaDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
