import { Component, OnInit, ViewChild } from '@angular/core';
import { Alimento } from 'src/app/model/alimento';
import { AlimentoService } from 'src/app/service/alimento.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AlimentoDialogoComponent } from './alimento-dialogo/alimento-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-alimento-listar',
  templateUrl: './alimento-listar.component.html',
  styleUrls: ['./alimento-listar.component.css'],
}) 
export class AlimentoListarComponent implements OnInit {
  lista: Alimento[] = [];
  dataSource: MatTableDataSource<Alimento> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','cal','acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: AlimentoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pService.listar().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    }); 
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AlimentoDialogoComponent);
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
