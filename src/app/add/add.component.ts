import { Component, OnInit } from '@angular/core';

import { DespesaService } from '../despesa.service';
import { Despesa } from '../despesa';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 despesa: Despesa;

  constructor(private despesaService: DespesaService) { 
  }

  ngOnInit() {
     this.despesa = new Despesa(new Date().getTime(), "", "", "", new Date(), 0);

  }

   save(): void {
      this.despesaService.save(this.despesa);
  }


}
