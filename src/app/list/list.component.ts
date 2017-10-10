import { Component, OnInit } from '@angular/core';

import { DespesaService } from '../despesa.service';
import { Despesa } from '../despesa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   despesas: Despesa[];


  constructor(private despesaService: DespesaService) { }

  ngOnInit() {
    this.despesas = this.despesaService.getAll();
    console.log( this.despesas);
  }

}
