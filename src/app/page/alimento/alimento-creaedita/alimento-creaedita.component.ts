import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alimento } from 'src/app/model/alimento';
import { AlimentoService } from 'src/app/service/alimento.service';

@Component({
  selector: 'app-alimento-creaedita',
  templateUrl: './alimento-creaedita.component.html',
  styleUrls: ['./alimento-creaedita.component.css']
})
export class AlimentoCreaeditaComponent implements OnInit {
  alimento: Alimento = new Alimento();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private alimentoService: AlimentoService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.alimento.nombreAlimento.length > 0 && this.alimento.kcalAlimento > 0) {
      if (this.edicion) {
        this.alimentoService.modificar(this.alimento).subscribe(() => {
          this.alimentoService.listar().subscribe(data => {
            this.alimentoService.setLista(data);
          })
        })
      }
      else{
        this.alimentoService.insertar(this.alimento).subscribe(() => {
          this.alimentoService.listar().subscribe(data => {
            this.alimentoService.setLista(data);
          })
        })
      }
      this.router.navigate(['alimentos']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.alimentoService.listarId(this.id).subscribe(data => {
        this.alimento = data;
      })
    }

  }
}
