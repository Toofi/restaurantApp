import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Output() emitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  public articles = this.orderService.Cgu;

  checkboxForm: FormGroup;

  constructor(private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    // console.log(this.checkboxForm.value);

  }


  initForm() {
    this.checkboxForm = this.formBuilder.group({
      accept: false
    });

    this.checkboxForm.get('accept').valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  onCheckBox() {
    this.checkboxForm.get('accept').setValue(!this.checkboxForm.get('accept').value);
  }

  onClick(value: boolean){
    this.emitter.emit(value);
  }

}
