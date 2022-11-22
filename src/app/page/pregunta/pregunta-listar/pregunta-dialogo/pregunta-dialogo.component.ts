import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-pregunta-dialogo',
  templateUrl: './pregunta-dialogo.component.html',
  styleUrls: ['./pregunta-dialogo.component.css']
})
export class PreguntaDialogoComponent implements OnInit {

  constructor(private preguntaService: PreguntaService, private dialogRef: MatDialogRef<PreguntaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.preguntaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
