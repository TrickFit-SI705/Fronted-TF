import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dieta } from 'src/app/model/Dieta';
import { DietaService } from 'src/app/service/dieta.service';
import { DietaDialogoComponent } from './dieta-dialogo/dieta-dialogo.component';

@Component({
  selector: 'app-dieta-listar',
  templateUrl: './dieta-listar.component.html',
  styleUrls: ['./dieta-listar.component.css']
})
export class DietaListarComponent implements OnInit {

  lista: Dieta[] = [];
  dataSource: MatTableDataSource<Dieta> = new MatTableDataSource();
  displayedColumns: string[]=['id','titulo','usuario','nutricionista','Contenido','Vigente', 'acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: DietaService, private dialog: MatDialog) { }

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
    this.dialog.open(DietaDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
