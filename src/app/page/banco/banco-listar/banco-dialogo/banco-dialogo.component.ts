import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BancoService } from 'src/app/service/banco.service';

@Component({
  selector: 'app-banco-dialogo',
  templateUrl: './banco-dialogo.component.html',
  styleUrls: ['./banco-dialogo.component.css']
})
export class BancoDialogoComponent implements OnInit {
  
  constructor(private bancoService: BancoService,
    private dialogRef: MatDialogRef<BancoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.bancoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
