import { Component, OnInit } from '@angular/core';

import { DespesaService } from '../despesa.service';
import { Despesa } from '../despesa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   despesas: Despesa[];


  constructor(private despesaService: DespesaService,private router: Router) { }

  ngOnInit() {
    this.despesas = this.despesaService.getAll();
    console.log( this.despesas);
  }

   add(): void {
    this.router.navigate(['/add']);
  }

   del(despesaId: number): void {
    this.despesaService.delete(despesaId);
  }



}
