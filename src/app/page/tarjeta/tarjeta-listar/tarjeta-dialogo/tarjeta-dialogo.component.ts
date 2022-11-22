import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-dialogo',
  templateUrl: './tarjeta-dialogo.component.html',
  styleUrls: ['./tarjeta-dialogo.component.css']
})
export class TarjetaDialogoComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService, private dialogRef: MatDialogRef<TarjetaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.tarjetaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
