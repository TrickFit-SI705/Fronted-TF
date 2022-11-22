import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from 'src/app/model/receta';
import { RecetaService } from 'src/app/service/receta.service';
import { RecetaListarComponent } from '../receta-listar/receta-listar.component';

@Component({
  selector: 'app-receta-creaedita',
  templateUrl: './receta-creaedita.component.html',
  styleUrls: ['./receta-creaedita.component.css']
})
export class RecetaCreaeditaComponent implements OnInit {
  receta: Receta = new Receta();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  constructor(private recetaService: RecetaService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  
  aceptar(): void {
    if (this.receta.tituloReceta.length > 0 && this.receta.descripReceta.length > 0) {
      if (this.edicion) {
        this.recetaService.modificar(this.receta).subscribe(() => {
          this.recetaService.listar().subscribe(data => {
            this.recetaService.setLista(data);
          })
        })
      }
      else{
        this.recetaService.insertar(this.receta).subscribe(() => {
          this.recetaService.listar().subscribe(data => {
            this.recetaService.setLista(data);
          })
        })
      }
      this.router.navigate(['recetas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  } 
  init() {
    if (this.edicion) {
      this.recetaService.listarId(this.id).subscribe(data => {
        this.receta = data;
      })
    }

  }
  getCont(): number{
    return this.recetaService.getContador();
  }
}
