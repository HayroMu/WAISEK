import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeOrderComponent } from './take-order/take-order.component'; //importar el componente takeorder 



@NgModule({
  declarations: [
    TakeOrderComponent
  ],
  imports: [
    CommonModule
  ],
    exports:[
        TakeOrderComponent  //exportar el componente
    ]
})
export class OrderModule { }
