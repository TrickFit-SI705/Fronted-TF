import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ejercicio-dialogo',
  templateUrl: './ejercicio-dialogo.component.html',
  styleUrls: ['./ejercicio-dialogo.component.css']
})
export class EjercicioDialogoComponent implements OnInit {

  constructor(private ejercicioService: EjercicioService,
    private dialogRef: MatDialogRef<EjercicioDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.ejercicioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
