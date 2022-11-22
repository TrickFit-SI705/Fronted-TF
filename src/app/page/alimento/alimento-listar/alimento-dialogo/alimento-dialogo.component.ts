import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentoService } from 'src/app/service/alimento.service';

@Component({
  selector: 'app-alimento-dialogo',
  templateUrl: './alimento-dialogo.component.html',
  styleUrls: ['./alimento-dialogo.component.css']
})
export class AlimentoDialogoComponent implements OnInit {

  constructor(private alimentoService: AlimentoService, 
    private dialogRef: MatDialogRef<AlimentoDialogoComponent>
    ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.alimentoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
