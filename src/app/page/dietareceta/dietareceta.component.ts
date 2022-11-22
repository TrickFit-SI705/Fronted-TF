import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dietareceta',
  templateUrl: './dietareceta.component.html',
  styleUrls: ['./dietareceta.component.css']
})
export class DietarecetaComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
