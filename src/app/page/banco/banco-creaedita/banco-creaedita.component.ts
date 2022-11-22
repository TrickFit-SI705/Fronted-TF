import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Banco } from 'src/app/model/banco';
import { BancoService } from 'src/app/service/banco.service';

@Component({
  selector: 'app-banco-creaedita',
  templateUrl: './banco-creaedita.component.html',
  styleUrls: ['./banco-creaedita.component.css']
})
export class BancoCreaeditaComponent implements OnInit {
  banco: Banco = new Banco();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  constructor(private bancoService: BancoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.banco.nombreBanco.length > 0) {
      if (this.edicion) {
        this.bancoService.modificar(this.banco).subscribe(() => {
          this.bancoService.listar().subscribe(data => {
            this.bancoService.setLista(data);
          });
        });
      }
      else{
        this.bancoService.insertar(this.banco).subscribe(() => {
          this.bancoService.listar().subscribe(data => {
            this.bancoService.setLista(data);
          });
        });
      }
      this.router.navigate(['bancos']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  } 
  init() {
    if (this.edicion) {
      this.bancoService.listarId(this.id).subscribe(data => {
        this.banco = data;
      })
    }

  }

}
