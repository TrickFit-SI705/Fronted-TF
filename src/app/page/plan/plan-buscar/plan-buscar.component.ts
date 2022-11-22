import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-plan-buscar',
  templateUrl: './plan-buscar.component.html',
  styleUrls: ['./plan-buscar.component.css']
})
export class PlanBuscarComponent implements OnInit {

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }
  buscarnombre(e: any) {
    this.planService.buscar(e.target.value).subscribe(data=>{
      this.planService.setLista(data);
    });
  }
  

}
