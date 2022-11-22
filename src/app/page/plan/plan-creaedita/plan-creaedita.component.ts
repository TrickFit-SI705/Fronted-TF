import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-plan-creaedita',
  templateUrl: './plan-creaedita.component.html',
  styleUrls: ['./plan-creaedita.component.css']
})
export class PlanCreaeditaComponent implements OnInit {
  plan: Plan = new Plan();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  constructor(private planService: PlanService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
      
    });
  }
  aceptar(): void {
    if (this.plan.nombrePlan.length > 0 && this.plan.detallesPlan.length > 0 && this.plan.tiempoPlan > 0 && this.plan.precioPlan > 0) {
      if (this.edicion) {
        this.planService.modificar(this.plan).subscribe(() => {
          this.planService.listar().subscribe(data => {
            this.planService.setLista(data);
          })
        })
      }
      else{
        this.planService.insertar(this.plan).subscribe(() => {
          this.planService.listar().subscribe(data => {
            this.planService.setLista(data);
          })
        })
      }
      
      this.router.navigate(['planes']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.planService.listarId(this.id).subscribe(data => {
        this.plan = data;
      })
    }

  }
}
