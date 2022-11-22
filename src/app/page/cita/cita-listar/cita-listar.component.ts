import { Component, OnInit, ViewChild } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';
import { MatTableDataSource } from '@angular/material/table';
import { CitaDialogoComponent } from './cita-dialogo/cita-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit {
  lista: Cita[] = [];
  dataSource: MatTableDataSource<Cita> = new MatTableDataSource();
  displayedColumns: string[]=['id','usuario','especialista','fecha','hora','acciones'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  private idMayor: number = 0;
  constructor(private pService: CitaService, private dialog: MatDialog) { }

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
     this.dialog.open(CitaDialogoComponent);
   }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
