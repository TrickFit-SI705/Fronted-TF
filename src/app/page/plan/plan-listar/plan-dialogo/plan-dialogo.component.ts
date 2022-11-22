import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-plan-dialogo',
  templateUrl: './plan-dialogo.component.html',
  styleUrls: ['./plan-dialogo.component.css']
})
export class PlanDialogoComponent implements OnInit {

  constructor(private propietarioService: PlanService,
    private dialogRef: MatDialogRef<PlanDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.propietarioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
