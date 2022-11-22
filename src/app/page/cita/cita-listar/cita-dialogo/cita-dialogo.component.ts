import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-dialogo',
  templateUrl: './cita-dialogo.component.html',
  styleUrls: ['./cita-dialogo.component.css']
})
export class CitaDialogoComponent implements OnInit {

  constructor(private citaService: CitaService, private dialogRef: MatDialogRef<CitaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.citaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
