import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/model/banco';
import { BancoService } from 'src/app/service/banco.service';

@Component({
  selector: 'app-banco-buscar',
  templateUrl: './banco-buscar.component.html',
  styleUrls: ['./banco-buscar.component.css']
})
export class BancoBuscarComponent implements OnInit {
  textoBuscar: string =""
  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.bancoService.buscar(e.target.value).subscribe(data=>{
      this.bancoService.setLista(data);
    });
  }

}
