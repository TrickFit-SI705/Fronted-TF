import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RecetaService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-receta-dialogo',
  templateUrl: './receta-dialogo.component.html',
  styleUrls: ['./receta-dialogo.component.css']
})
export class RecetaDialogoComponent implements OnInit {

  constructor(private recetaService: RecetaService,
    private dialogRef: MatDialogRef<RecetaDialogoComponent>
  ) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.recetaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
