import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-dialogo',
  templateUrl: './suscripcion-dialogo.component.html',
  styleUrls: ['./suscripcion-dialogo.component.css']
})
export class SuscripcionDialogoComponent implements OnInit {

  constructor(private suscripcionService: SuscripcionService, private dialogRef: MatDialogRef<SuscripcionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.suscripcionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
