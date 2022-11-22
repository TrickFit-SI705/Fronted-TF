import { Component, OnInit } from '@angular/core';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipousuario-dialogo',
  templateUrl: './tipousuario-dialogo.component.html',
  styleUrls: ['./tipousuario-dialogo.component.css']
})
export class TipousuarioDialogoComponent implements OnInit {

  constructor(private tipousuarioService: TipousuarioService,
    private dialogRef: MatDialogRef<TipousuarioDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.tipousuarioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
