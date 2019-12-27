import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  public companyForm: FormGroup;
  public nameText: string;
  public invalidForm: boolean = false;

  constructor(protected orderService: OrderService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.companyForm = this.formBuilder.group({
      companyName: [this.orderService.Company ? this.orderService.Company.companyName : null, [Validators.required, Validators.maxLength(25)]],
      phoneNumber: [this.orderService.Company ? this.orderService.Company.phoneNumber : null, Validators.pattern('^\\d{3,15}$')],
      email: [this.orderService.Company ? this.orderService.Company.email : null, Validators.pattern('^[\\w\\-]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,4}$')]
    });
  }

  onSubmitForm() {
    const formValue = this.companyForm.value;
    const newCompany = new Company(
        formValue.companyName,
        formValue.phoneNumber,
        formValue.email
        );
    this.orderService.Company = newCompany;
    console.log(newCompany);
  }

  onClick(value: number) {
    this.emitter.emit(value);
  }

  isValid() {
    if (this.companyForm.invalid) {
      this.invalidForm = true;      
    } else {
      this.onSubmitForm();
      this.onClick(3);
    }
  }

}
