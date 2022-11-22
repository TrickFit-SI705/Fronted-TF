import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DietaService } from 'src/app/service/dieta.service';

@Component({
  selector: 'app-dieta-dialogo',
  templateUrl: './dieta-dialogo.component.html',
  styleUrls: ['./dieta-dialogo.component.css']
})
export class DietaDialogoComponent implements OnInit {

  constructor(private dietaService: DietaService, private dialogRef: MatDialogRef<DietaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.dietaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
