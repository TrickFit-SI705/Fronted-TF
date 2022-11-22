import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutinaejercicio',
  templateUrl: './rutinaejercicio.component.html',
  styleUrls: ['./rutinaejercicio.component.css']
})
export class RutinaejercicioComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
