import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IModalForm } from 'src/app/models/modalForm';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(value: number) {
    this.emitter.emit(value);
  }

}
