import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RecetaalimentoService } from 'src/app/service/recetaalimento.service';

@Component({
  selector: 'app-recetaalimento-dialogo',
  templateUrl: './recetaalimento-dialogo.component.html',
  styleUrls: ['./recetaalimento-dialogo.component.css']
})
export class RecetaalimentoDialogoComponent implements OnInit {

  constructor(private recetaalimentoService: RecetaalimentoService, private dialogRef: MatDialogRef<RecetaalimentoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.recetaalimentoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
