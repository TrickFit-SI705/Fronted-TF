import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetaalimento',
  templateUrl: './recetaalimento.component.html',
  styleUrls: ['./recetaalimento.component.css']
})
export class RecetaalimentoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
