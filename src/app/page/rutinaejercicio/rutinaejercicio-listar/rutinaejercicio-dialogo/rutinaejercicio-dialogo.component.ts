import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RutinaejercicioService } from 'src/app/service/rutinaejercicio.service';

@Component({
  selector: 'app-rutinaejercicio-dialogo',
  templateUrl: './rutinaejercicio-dialogo.component.html',
  styleUrls: ['./rutinaejercicio-dialogo.component.css']
})
export class RutinaejercicioDialogoComponent implements OnInit {

  constructor(private RutinaejercicioService: RutinaejercicioService, private dialogRef: MatDialogRef<RutinaejercicioDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.RutinaejercicioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
