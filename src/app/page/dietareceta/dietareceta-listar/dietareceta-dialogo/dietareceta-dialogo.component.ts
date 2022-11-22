import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DietarecetaService } from 'src/app/service/dietareceta.service';
import { DietarecetaComponent } from '../../dietareceta.component';

@Component({
  selector: 'app-dietareceta-dialogo',
  templateUrl: './dietareceta-dialogo.component.html',
  styleUrls: ['./dietareceta-dialogo.component.css']
})
export class DietarecetaDialogoComponent implements OnInit {

  constructor(private dietarecetaService: DietarecetaService, private dialogRef: MatDialogRef<DietarecetaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.dietarecetaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
