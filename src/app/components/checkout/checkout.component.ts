import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(protected orderService: OrderService) { }

  ngOnInit() {
  }

  onBack(value: number) {
    this.emitter.emit(value);
  }

  onConfirm(value: number) {
    this.orderService.mergeForms();
    this.emitter.emit(value);
  }


}