import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DietaReceta } from 'src/app/model/dieta_receta';
import { DietarecetaService } from 'src/app/service/dietareceta.service';
import { DietarecetaDialogoComponent } from './dietareceta-dialogo/dietareceta-dialogo.component';

@Component({
  selector: 'app-dietareceta-listar',
  templateUrl: './dietareceta-listar.component.html',
  styleUrls: ['./dietareceta-listar.component.css']
})
export class DietarecetaListarComponent implements OnInit {
  lista: DietaReceta[] = [];
  dataSource: MatTableDataSource<DietaReceta> = new MatTableDataSource();
  displayedColumns: string[]=['id','dieta','receta','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: DietarecetaService, private dialog: MatDialog) { }

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
    this.dialog.open(DietarecetaDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
