import { Injectable } from '@angular/core';
import { Despesa } from './despesa';

@Injectable()
export class DespesaService {

  constructor() { }

   getAll(): Despesa[] {
      let despesas: Despesa[] = [ 
        new Despesa(1, "Mercado", "glyphicon-shopping-cart", "Extra", new Date("2016-10-01T03:00:00Z"), 200.5),
        new Despesa(2, "Lazer", "glyphicon-knight", "Cinema", new Date("2016-10-20T03:00:00Z"), 59.9)
    ];
      return despesas;
    }
 save(despesa: Despesa): void {
    switch(despesa.tipo)
    {
      case "Mercado":
        despesa.icone = "glyphicon-shopping-cart";
      break;
      case "Lazer":
        despesa.icone = "glyphicon-knight";
      break;
      case "Saúde":
        despesa.icone = "glyphicon-heart-empty";
      break;
    }

    console.log(despesa);
  }


}
