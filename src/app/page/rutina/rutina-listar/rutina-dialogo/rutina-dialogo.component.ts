import { Component, OnInit } from '@angular/core';
import { RutinaService } from 'src/app/service/rutina.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rutina-dialogo',
  templateUrl: './rutina-dialogo.component.html',
  styleUrls: ['./rutina-dialogo.component.css']
})
export class RutinaDialogoComponent implements OnInit {

  constructor(private rutinaService: RutinaService, private dialogRef: MatDialogRef<RutinaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.rutinaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
