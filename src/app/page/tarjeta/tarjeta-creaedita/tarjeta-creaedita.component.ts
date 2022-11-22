import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Banco } from 'src/app/model/banco';
import { Tarjeta } from 'src/app/model/tarjeta';
import { BancoService } from 'src/app/service/banco.service';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-creaedita',
  templateUrl: './tarjeta-creaedita.component.html',
  styleUrls: ['./tarjeta-creaedita.component.css']
})
export class TarjetaCreaeditaComponent implements OnInit {
  tarjeta: Tarjeta = new Tarjeta();
  id: number = 0;
  edicion: boolean = false;
  listaBancos: Banco[] = [];
  idBancoSelec: number = 0;
  mensaje: string = '';
  mensaje1: string = '';
  constructor(private tarjetaService: TarjetaService, private route: ActivatedRoute, private router: Router, private bancoService: BancoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.bancoService.listar().subscribe(data => { this.listaBancos = data });
  }
  aceptar() {
    if (this.tarjeta.numeroTarjeta.length > 0 &&
      this.idBancoSelec>0) {
      let b = new Banco();
      b.idBanco = this.idBancoSelec;
      this.tarjeta.banco = b;
      if (this.edicion) {
        this.tarjetaService.modificar(this.tarjeta).subscribe(() => {
          this.tarjetaService.listar().subscribe(data => {
            this.tarjetaService.setLista(data);
          });
        });

      } else {
        this.tarjetaService.insertar(this.tarjeta).subscribe(() => {
          this.tarjetaService.listar().subscribe(data => {
            this.tarjetaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['tarjetas']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.tarjetaService.listarId(this.id).subscribe(data => {
        this.tarjeta = data
        console.log(data);
        this.idBancoSelec = data.banco.idBanco;
      });

    }

  }

}
