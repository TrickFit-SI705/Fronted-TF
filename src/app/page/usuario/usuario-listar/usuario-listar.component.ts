import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  lista: Usuario[] = [];
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[]=['id','dni','nombre','email','peso','estatura', 'tipousuario', 'acciones'];
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private pService: UsuarioService, private dialog: MatDialog) { }

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
    this.dialog.open(UsuarioDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
