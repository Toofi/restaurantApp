import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-modal-switch',
  templateUrl: './modal-switch.component.html',
  styleUrls: ['./modal-switch.component.scss']
})
export class ModalSwitchComponent implements OnInit {
  @Input() stepModal: number;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  public setStepPosition(val: number){
    if(val) {
      this.stepModal = val;
    } else {
      this.orderService.clearForm();
      this.stepModal = 1;
    }
  }

}
